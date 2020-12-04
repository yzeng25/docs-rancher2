---
title: 将Rancher迁移到新集群
description: description
keywords:
  - rancher 2.0中文文档
  - rancher 2.x 中文文档
  - rancher中文
  - rancher 2.0中文
  - rancher2
  - rancher教程
  - rancher中国
  - rancher 2.0
  - rancher2.0 中文教程
  - subtitles1
  - subtitles2
  - subtitles3
  - subtitles4
  - subtitles5
  - subtitles6
---

如果你要将Rancher迁移到一个新的Kubernetes集群，你不需要先在新集群上安装Rancher。如果将Rancher还原到一个已经安装了Rancher的新集群上，可能会引起问题。

### 先决条件

这些说明假设你已经[创建了一个备份](./../back-up-rancher/_index)，并且已经安装了将在其中部署Rancher的新Kubernetes集群。

要求使用与第一个群集中设置的服务器URL相同的hostname。

Rancher版本必须是v2.5.0及以上。

Rancher 可以安装在任何 Kubernetes 集群上，包括托管的 Kubernetes 集群，如 Amazon EKS 集群。有关安装Kubernetes的帮助，请参考Kubernetes发行版的文档。也可以使用Rancher的Kubernetes发行版之一：

- [RKE Kubernetes 安装文档](/docs/rancher2/installation/_index)
- [K3s Kubernetes 安装文档](/docs/k3s/installation/_index)

### 1. 安装 rancher-backup Helm chart

```
helm repo add rancher-charts https://charts.rancher.io
helm repo update
helm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace
helm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system
```

### 2. 使用Restore自定义资源从备份中还原

如果你使用S3存储作为备份源，并且需要使用你的S3凭证进行还原，请使用你的S3凭证在这个集群中创建一个Secret。Secret数据必须有两个key，`accessKey`和`secretKey`，包含s3凭证，像这样：

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: s3-creds
type: Opaque
data:
  accessKey: <Enter your access key>
  secretKey: <Enter your secret key>
```

这个secret可以在任何命名空间中创建，上面的例子中，它将在默认的命名空间中创建。

在Restore自定义资源中，`prune`必须设置为false。

创建一个像下面例子一样的Restore自定义资源：

```yaml
# migrationResource.yaml
apiVersion: resources.cattle.io/v1
kind: Restore
metadata:
  name: restore-migration
spec:
  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz
  prune: false
  encryptionConfigSecretName: encryptionconfig
  storageLocation:
    s3:
      credentialSecretName: s3-creds
      credentialSecretNamespace: default
      bucketName: backup-test
      folder: ecm1
      region: us-west-2
      endpoint: s3.us-west-2.amazonaws.com
```

:::important 重要：
只有在创建备份时启用了加密功能时，才必须设置 `encryptionConfigSecretName` 字段。提供包含加密配置文件的Secret名称。如果您只有加密配置文件，但在此群集中没有用它创建的Secret，请使用以下步骤创建secret:
:::

1. 加密配置文件必须命名为`encryption-provider-config.yaml`，并且必须使用`--from-file`标志来创建这个secret。因此，将你的`EncryptionConfiguration`保存在一个名为`encryption-provider-config.yaml`的文件中，然后运行这个命令:

```
kubectl create secret generic encryptionconfig \
  --from-file=./encryption-provider-config.yaml \
  -n cattle-resources-system
```

然后应用资源:

```
kubectl apply -f migrationResource.yaml
```

### 3. 安装 cert-manager

按照文档中关于在Kubernetes上安装cert-manager的步骤[安装cert-manager](/docs/rancher2/installation/install-rancher-on-k8s/_index#5-install-cert-manager)。

### 4. 使用helm安装rancher

使用与第一个集群上使用的相同版本的Helm来安装Rancher。

```
helm install rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=<same hostname as the server URL from the first Rancher server> \
```