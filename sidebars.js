/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    rancher2: {
        版本说明: [
            "rancher2/releases/v2.4.8",
            "rancher2/releases/v2.4.7",
            "rancher2/releases/v2.4.6",
            "rancher2/releases/v2.4.5",
            "rancher2/releases/v2.4.4",
            "rancher2/releases/v2.4.3",
            "rancher2/releases/v2.4.2",
            "rancher2/releases/v2.4.0",
            "rancher2/releases/v2.3.8",
            "rancher2/releases/v2.3.7",
            "rancher2/releases/v2.3.6",
            "rancher2/releases/v2.3.5",
            "rancher2/releases/v2.3.4",
            "rancher2/releases/v2.3.3",
            "rancher2/releases/v2.3.2",
            "rancher2/releases/v2.3.1",
            "rancher2/releases/v2.3.0",
        ],
        热点问题: ["rancher2/trending-topics/_index"],
        产品介绍: [
            "rancher2/overview/_index",
            "rancher2/overview/architecture/_index",
            "rancher2/overview/architecture-recommendations/_index",
            "rancher2/overview/concepts/_index",
            "rancher2/overview/glossary/_index",
            "rancher2/overview/rancher-glossary/_index",
        ],
        快速入门: [
            "rancher2/quick-start-guide/_index",
            "rancher2/quick-start-guide/cli/_index",
            {
                type: "category",
                label: "部署 Rancher Server",
                items: [
                    "rancher2/quick-start-guide/deployment/_index",
                    "rancher2/quick-start-guide/deployment/quickstart-manual-setup/_index",
                    "rancher2/quick-start-guide/deployment/amazon-aws-qs/_index",
                    "rancher2/quick-start-guide/deployment/microsoft-azure-qs/_index",
                    "rancher2/quick-start-guide/deployment/digital-ocean-qs/_index",
                    "rancher2/quick-start-guide/deployment/google-gcp-qs/_index",
                    "rancher2/quick-start-guide/deployment/quickstart-vagrant/_index",
                ],
            },
            {
                type: "category",
                label: "部署工作负载",
                items: [
                    "rancher2/quick-start-guide/workload/_index",
                    "rancher2/quick-start-guide/workload/quickstart-deploy-workload-ingress/_index",
                    "rancher2/quick-start-guide/workload/quickstart-deploy-workload-nodeport/_index",
                ],
            },
        ],
        安装指南: [
            "rancher2/installation/_index",
            {
                type: "category",
                label: "安装要求",
                items: [
                    "rancher2/installation/requirements/_index",
                    "rancher2/installation/requirements/installing-docker/_index",
                    "rancher2/installation/requirements/ports/_index",
                ],
            },
            "rancher2/installation/how-ha-works/_index",
            {
                type: "category",
                label: "Rancher 高可用安装",
                items: [
                    "rancher2/installation/k8s-install/_index",
                    "rancher2/installation/k8s-install/create-nodes-lb/_index",
                    "rancher2/installation/k8s-install/kubernetes-rke/_index",
                    "rancher2/installation/k8s-install/helm-rancher/_index",
                ],
            },
            {
                type: "category",
                label: "其他安装方法",
                items: [
                    "rancher2/installation/other-installation-methods/_index",
                    {
                        type: "category",
                        label: "Rancher 单节点安装",
                        items: [
                            "rancher2/installation/other-installation-methods/single-node-docker/_index",
                            "rancher2/installation/other-installation-methods/single-node-docker/troubleshooting/_index",
                            "rancher2/installation/other-installation-methods/single-node-docker/advanced/_index",
                            "rancher2/installation/other-installation-methods/single-node-docker/proxy/_index",
                        ],
                    },
                    {
                        type: "category",
                        label: "Rancher 离线安装",
                        items: [
                            "rancher2/installation/other-installation-methods/air-gap/_index",
                            "rancher2/installation/other-installation-methods/air-gap/prepare-nodes/_index",
                            "rancher2/installation/other-installation-methods/air-gap/populate-private-registry/_index",
                            "rancher2/installation/other-installation-methods/air-gap/launch-kubernetes/_index",
                            "rancher2/installation/other-installation-methods/air-gap/install-rancher/_index",
                        ],
                    },
                    {
                        type: "category",
                        label: "HTTP 代理安装 Rancher",
                        items: [
                            "rancher2/installation/other-installation-methods/behind-proxy/_index",
                            "rancher2/installation/other-installation-methods/behind-proxy/prepare-nodes/_index",
                            "rancher2/installation/other-installation-methods/behind-proxy/launch-kubernetes/_index",
                            "rancher2/installation/other-installation-methods/behind-proxy/install-rancher/_index",
                        ],
                    },
                ],
            },
            {
                type: "category",
                label: "其他资料和高级选项",
                items: [
                    "rancher2/installation/options/_index",
                    {
                        type: "category",
                        label: "Rancher 高可用 Helm2 安装",
                        items: [
                            "rancher2/installation/options/helm2/_index",
                            {
                                type: "category",
                                label: "1、配置基础设施",
                                items: [
                                    "rancher2/installation/options/helm2/create-nodes-lb/_index",
                                    "rancher2/installation/options/helm2/create-nodes-lb/nginx/_index",
                                    "rancher2/installation/options/helm2/create-nodes-lb/nlb/_index",
                                ],
                            },
                            {
                                type: "category",
                                label: "2、安装 Kubernetes",
                                items: [
                                    "rancher2/installation/options/helm2/kubernetes-rke/_index",
                                    "rancher2/installation/options/helm2/kubernetes-rke/troubleshooting/_index",
                                ],
                            },
                            {
                                type: "category",
                                label: "3、Helm 初始化",
                                items: [
                                    "rancher2/installation/options/helm2/helm-init/_index",
                                    "rancher2/installation/options/helm2/helm-init/troubleshooting/_index",
                                ],
                            },
                            {
                                type: "category",
                                label: "4、安装 Rancher",
                                items: [
                                    "rancher2/installation/options/helm2/helm-rancher/_index",
                                    "rancher2/installation/options/helm2/helm-rancher/tls-secrets/_index",
                                    "rancher2/installation/options/helm2/helm-rancher/chart-options/_index",
                                    "rancher2/installation/options/helm2/helm-rancher/troubleshooting/_index",
                                ],
                            },
                        ],
                    },
                    {
                        type: "category",
                        label: "Rancher 高可用 Helm2 离线安装",
                        items: [
                            "rancher2/installation/options/air-gap-helm2/_index",
                            "rancher2/installation/options/air-gap-helm2/prepare-nodes/_index",
                            "rancher2/installation/options/air-gap-helm2/populate-private-registry/_index",
                            "rancher2/installation/options/air-gap-helm2/launch-kubernetes/_index",
                            "rancher2/installation/options/air-gap-helm2/install-rancher/_index",
                        ],
                    },
                    "rancher2/installation/options/etcd/_index",
                    "rancher2/installation/options/server-tags/_index",
                    "rancher2/installation/options/single-node-install-external-lb/_index",
                    "rancher2/installation/options/nginx/_index",
                    "rancher2/installation/options/F5-7-layer-loadbalancer/_index",
                    "rancher2/installation/options/F5-WAF/_index",
                    "rancher2/installation/options/tls-secrets/_index",
                    "rancher2/installation/options/chart-options/_index",
                    {
                        type: "category",
                        label: "RKE Add-On 安装",
                        items: [
                            "rancher2/installation/options/rke-add-on/_index",
                            {
                                type: "category",
                                label: "Rancher 高可用 - 4层 LB",
                                items: [
                                    "rancher2/installation/options/rke-add-on/layer-4-lb/_index",
                                    "rancher2/installation/options/rke-add-on/layer-4-lb/nlb/_index",
                                ],
                            },
                            {
                                type: "category",
                                label: "Rancher 高可用 - 7层 LB",
                                items: [
                                    "rancher2/installation/options/rke-add-on/layer-7-lb/_index",
                                    "rancher2/installation/options/rke-add-on/layer-7-lb/alb/_index",
                                    "rancher2/installation/options/rke-add-on/layer-7-lb/nginx/_index",
                                ],
                            },
                            "rancher2/installation/options/rke-add-on/proxy/_index",
                            "rancher2/installation/options/rke-add-on/api-auditing/_index",
                            {
                                type: "category",
                                label: "问题排查",
                                items: [
                                    "rancher2/installation/options/rke-add-on/troubleshooting/_index",
                                    "rancher2/installation/options/rke-add-on/troubleshooting/generic-troubleshooting/_index",
                                    "rancher2/installation/options/rke-add-on/troubleshooting/job-complete-status/_index",
                                    "rancher2/installation/options/rke-add-on/troubleshooting/404-default-backend/_index",
                                ],
                            },
                        ],
                    },
                    "rancher2/installation/options/troubleshooting/_index",
                    "rancher2/installation/options/nlb/_index",
                    "rancher2/installation/options/ec2-node/_index",
                    "rancher2/installation/options/rds/_index",
                    "rancher2/installation/options/helm-version/_index",
                    "rancher2/installation/options/custom-ca-root-certificate/_index",
                    "rancher2/installation/options/local-system-charts/_index",
                    {
                        type: "category",
                        label: "升级 Cert-Manager",
                        items: [
                            "rancher2/installation/options/upgrading-cert-manager/_index",
                            "rancher2/installation/options/upgrading-cert-manager/helm-2-instructions/_index",
                        ],
                    },
                    "rancher2/installation/options/arm64-platform/_index",
                    {
                        type: "category",
                        label: "功能开关",
                        items: [
                            "rancher2/installation/options/feature-flags/_index",
                            "rancher2/installation/options/feature-flags/enable-not-default-storage-drivers/_index",
                            "rancher2/installation/options/feature-flags/istio-virtual-service-ui/_index",
                        ],
                    },
                    "rancher2/installation/options/api-audit-log/_index",
                    "rancher2/installation/options/tls-settings/_index",
                    "rancher2/installation/options/firewall/_index",
                    "rancher2/installation/options/self-signed-ssl/_index",
                    {
                        type: "category",
                        label: "cluster.yml 文件模板",
                        items: [
                            "rancher2/installation/options/cluster-yml-templates/_index",
                            "rancher2/installation/options/cluster-yml-templates/3-node-certificate/_index",
                            "rancher2/installation/options/cluster-yml-templates/3-node-certificate-recognizedca/_index",
                            "rancher2/installation/options/cluster-yml-templates/3-node-externalssl-certificate/_index",
                            "rancher2/installation/options/cluster-yml-templates/3-node-externalssl-recognizedca/_index",
                        ],
                    },
                ],
            },
        ],
        升级和回滚: [
            "rancher2/upgrades/_index",
            {
                type: "category",
                label: "升级",
                items: [
                    "rancher2/upgrades/upgrades/_index",
                    {
                        type: "category",
                        label: "升级高可用 Rancher",
                        items: [
                            "rancher2/upgrades/upgrades/ha/_index",
                            "rancher2/upgrades/upgrades/ha/helm2/_index",
                        ],
                    },
                    "rancher2/upgrades/upgrades/single-node/_index",
                    "rancher2/upgrades/upgrades/migrating-from-rke-add-on/_index",
                    "rancher2/upgrades/upgrades/namespace-migration/_index",
                ],
            },
            {
                type: "category",
                label: "回滚",
                items: [
                    "rancher2/upgrades/rollbacks/_index",
                    "rancher2/upgrades/rollbacks/ha-server-rollbacks/_index",
                    "rancher2/upgrades/rollbacks/single-node-rollbacks/_index",
                ],
            },
        ],
        备份和恢复指南: [
            "rancher2/backups/2.0-2.4/_index",
            {
                type: "category",
                label: "备份",
                items: [
                    "rancher2/backups/2.0-2.4/_index",
                    "rancher2/backups/2.0-2.4/k3s-backups/_index",
                    "rancher2/backups/2.0-2.4/ha-backups/_index",
                    "rancher2/backups/2.0-2.4/ha-backups/_index",
                    "rancher2/backups/2.0-2.4/single-node-backups/_index",
                ],
            },
            {
                type: "category",
                label: "恢复",
                items: [
                    "rancher2/backups/2.0-2.4/restorations/_index",
                    "rancher2/backups/2.0-2.4/restorations/k3s-restoration/_index",
                    "rancher2/backups/2.0-2.4/restorations/ha-restoration/_index",
                    "rancher2/backups/2.0-2.4/restorations/single-node-restoration/_index",
                ],
            },
        ],
        最佳实践: [
            "rancher2/best-practices/2.0-2.4/_index",
            "rancher2/best-practices/2.0-2.4/deployment-strategies/_index",
            "rancher2/best-practices/2.0-2.4/deployment-types/_index",
            "rancher2/best-practices/2.0-2.4/containers/_index",
            "rancher2/best-practices/2.0-2.4/management/_index",

            {
                type: "category",
                label: "调优",
                items: [
                    "rancher2/best-practices/2.0-2.4/optimize/os/_index",
                    "rancher2/best-practices/2.0-2.4/optimize/docker/_index",
                    "rancher2/best-practices/2.0-2.4/optimize/etcd/_index",
                    "rancher2/best-practices/2.0-2.4/optimize/kubernetes/_index",
                ],
            },
            "rancher2/best-practices/2.0-2.4/use-in-china/_index",
        ],
        系统管理员指南: [
            "rancher2/admin-settings/_index",
            "rancher2/admin-settings/config-private-registry/_index",
            {
                type: "category",
                label: "登录认证",
                items: [
                    "rancher2/admin-settings/authentication/_index",
                    "rancher2/admin-settings/authentication/user-groups/_index",
                    "rancher2/admin-settings/authentication/local/_index",
                    "rancher2/admin-settings/authentication/ad/_index",
                    {
                        type: "category",
                        label: "对接 OpenLDAP",
                        items: [
                            "rancher2/admin-settings/authentication/openldap/_index",
                            "rancher2/admin-settings/authentication/openldap/openldap-config/_index",
                        ],
                    },
                    "rancher2/admin-settings/authentication/freeipa/_index",
                    "rancher2/admin-settings/authentication/azure-ad/_index",

                    "rancher2/admin-settings/authentication/github/_index",
                    "rancher2/admin-settings/authentication/keycloak/_index",
                    "rancher2/admin-settings/authentication/ping-federate/_index",
                    {
                        type: "category",
                        label: "对接 AD FS (SAML)",
                        items: [
                            "rancher2/admin-settings/authentication/microsoft-adfs/_index",
                            "rancher2/admin-settings/authentication/microsoft-adfs/microsoft-adfs-setup/_index",
                            "rancher2/admin-settings/authentication/microsoft-adfs/rancher-adfs-setup/_index",
                        ],
                    },
                    "rancher2/admin-settings/authentication/okta/_index",
                    {
                        type: "category",
                        label: "对接 Shibboleth (SAML)",
                        items: [
                            "rancher2/admin-settings/authentication/shibboleth/_index",
                            "rancher2/admin-settings/authentication/shibboleth/about/_index",
                        ],
                    },
                    "rancher2/admin-settings/authentication/google/_index",
                ],
            },
            {
                type: "category",
                label: "RBAC",
                items: [
                    "rancher2/admin-settings/rbac/_index",
                    "rancher2/admin-settings/rbac/global-permissions/_index",
                    "rancher2/admin-settings/rbac/cluster-project-roles/_index",
                    "rancher2/admin-settings/rbac/default-custom-roles/_index",
                    "rancher2/admin-settings/rbac/locked-roles/_index",
                ],
            },
            "rancher2/admin-settings/k8s-metadata/_index",
            "rancher2/admin-settings/pod-security-policies/_index",
            {
                type: "category",
                label: "RKE 集群模板",
                items: [
                    "rancher2/admin-settings/rke-templates/_index",
                    "rancher2/admin-settings/rke-templates/example-scenarios/_index",
                    "rancher2/admin-settings/rke-templates/creator-permissions/_index",
                    "rancher2/admin-settings/rke-templates/template-access-and-sharing/_index",
                    "rancher2/admin-settings/rke-templates/creating-and-revising/_index",
                    "rancher2/admin-settings/rke-templates/enforcement/_index",
                    "rancher2/admin-settings/rke-templates/overrides/_index",
                    "rancher2/admin-settings/rke-templates/applying-templates/_index",
                    "rancher2/admin-settings/rke-templates/example-yaml/_index",
                    "rancher2/admin-settings/rke-templates/rke-templates-and-hardware/_index",
                ],
            },
            {
                type: "category",
                label: "驱动管理",
                items: [
                    "rancher2/admin-settings/drivers/_index",
                    "rancher2/admin-settings/drivers/cluster-drivers/_index",
                    "rancher2/admin-settings/drivers/node-drivers/_index",
                ],
            },
            "rancher2/admin-settings/replace-ip-domain/_index",
        ],
        创建集群: [
            "rancher2/cluster-provisioning/_index",
            "rancher2/cluster-provisioning/node-requirements/_index",
            {
                type: "category",
                label: "生产环境检查清单",
                items: [
                    "rancher2/cluster-provisioning/production/_index",
                    "rancher2/cluster-provisioning/production/recommended-architecture/_index",
                    "rancher2/cluster-provisioning/production/nodes-and-roles/_index",
                ],
            },
            {
                type: "category",
                label: "创建托管集群",
                items: [
                    "rancher2/cluster-provisioning/hosted-kubernetes-clusters/_index",
                    "rancher2/cluster-provisioning/hosted-kubernetes-clusters/gke/_index",
                    "rancher2/cluster-provisioning/hosted-kubernetes-clusters/eks/_index",
                    "rancher2/cluster-provisioning/hosted-kubernetes-clusters/aks/_index",
                    "rancher2/cluster-provisioning/hosted-kubernetes-clusters/ack/_index",
                    "rancher2/cluster-provisioning/hosted-kubernetes-clusters/tke/_index",
                    "rancher2/cluster-provisioning/hosted-kubernetes-clusters/cce/_index",
                ],
            },
            {
                type: "category",
                label: "创建 RKE 集群",
                items: [
                    "rancher2/cluster-provisioning/rke-clusters/_index",
                    {
                        type: "category",
                        label: "创建节点和集群",
                        items: [
                            "rancher2/cluster-provisioning/rke-clusters/node-pools/_index",
                            "rancher2/cluster-provisioning/rke-clusters/node-pools/ec2/_index",
                            "rancher2/cluster-provisioning/rke-clusters/node-pools/digital-ocean/_index",
                            "rancher2/cluster-provisioning/rke-clusters/node-pools/azure/_index",
                            {
                                type: "category",
                                label: "vSphere",
                                items: [
                                    "rancher2/cluster-provisioning/rke-clusters/node-pools/vsphere/_index",
                                    "rancher2/cluster-provisioning/rke-clusters/node-pools/vsphere/provisioning-vsphere-clusters/_index",
                                    "rancher2/cluster-provisioning/rke-clusters/node-pools/vsphere/provisioning-vsphere-clusters/creating-credentials/_index",
                                    "rancher2/cluster-provisioning/rke-clusters/node-pools/vsphere/provisioning-vsphere-clusters/enabling-uuids/_index",
                                    "rancher2/cluster-provisioning/rke-clusters/node-pools/vsphere/provisioning-vsphere-clusters/node-template-reference/_index",
                                ],
                            },
                        ],
                    },
                    {
                        type: "category",
                        label: "自定义集群",
                        items: [
                            "rancher2/cluster-provisioning/rke-clusters/custom-nodes/_index",
                            "rancher2/cluster-provisioning/rke-clusters/custom-nodes/agent-options/_index",
                        ],
                    },
                    {
                        type: "category",
                        label: "Windows 集群",
                        items: [
                            "rancher2/cluster-provisioning/rke-clusters/windows-clusters/_index",
                            "rancher2/cluster-provisioning/rke-clusters/windows-clusters/host-gateway-requirements/_index",
                            "rancher2/cluster-provisioning/rke-clusters/windows-clusters/docs-for-2.1-and-2.2/_index",
                        ],
                    },
                    {
                        type: "category",
                        label: "集群配置参数",
                        items: [
                            "rancher2/cluster-provisioning/rke-clusters/options/_index",
                            "rancher2/cluster-provisioning/rke-clusters/options/pod-security-policies/_index",
                        ],
                    },
                    {
                        type: "category",
                        label: "配置 Cloud Provider",
                        items: [
                            "rancher2/cluster-provisioning/rke-clusters/cloud-providers/_index",
                            "rancher2/cluster-provisioning/rke-clusters/cloud-providers/amazon/_index",
                            "rancher2/cluster-provisioning/rke-clusters/cloud-providers/azure/_index",
                            "rancher2/cluster-provisioning/rke-clusters/cloud-providers/gce/_index",
                        ],
                    },
                    "rancher2/cluster-provisioning/rke-clusters/rancher-agents/_index",
                ],
            },
            "rancher2/cluster-provisioning/imported-clusters/_index",
        ],
        集群管理员指南: [
            "rancher2/cluster-admin/_index",
            {
                type: "category",
                label: "集群访问控制",
                items: [
                    "rancher2/cluster-admin/cluster-access/_index",
                    "rancher2/cluster-admin/cluster-access/kubectl/_index",
                    "rancher2/cluster-admin/cluster-access/ace/_index",
                    "rancher2/cluster-admin/cluster-access/cluster-members/_index",
                ],
            },
            {
                type: "category",
                label: "集群弹性伸缩",
                items: [
                    "rancher2/cluster-admin/cluster-autoscaler/_index",
                    "rancher2/cluster-admin/cluster-autoscaler/amazon/_index",
                ],
            },
            "rancher2/cluster-admin/upgrading-kubernetes/_index",
            "rancher2/cluster-admin/pod-security-policy/_index",
            "rancher2/cluster-admin/editing-clusters/_index",
            "rancher2/cluster-admin/nodes/_index",
            {
                type: "category",
                label: "存储卷和存储类",
                items: [
                    "rancher2/cluster-admin/volumes-and-storage/_index",
                    "rancher2/cluster-admin/volumes-and-storage/how-storage-works/_index",
                    "rancher2/cluster-admin/volumes-and-storage/attaching-existing-storage/_index",
                    "rancher2/cluster-admin/volumes-and-storage/provisioning-new-storage/_index",
                    {
                        type: "category",
                        label: "创建存储示例",
                        items: [
                            "rancher2/cluster-admin/volumes-and-storage/examples/_index",
                            "rancher2/cluster-admin/volumes-and-storage/examples/ebs/_index",
                            "rancher2/cluster-admin/volumes-and-storage/examples/nfs/_index",
                            "rancher2/cluster-admin/volumes-and-storage/examples/vsphere/_index",
                        ],
                    },
                    "rancher2/cluster-admin/volumes-and-storage/glusterfs-volumes/_index",
                    "rancher2/cluster-admin/volumes-and-storage/iscsi-volumes/_index",
                ],
            },
            "rancher2/cluster-admin/projects-and-namespaces/_index",
            {
                type: "category",
                label: "集群工具",
                items: [
                    "rancher2/cluster-admin/tools/_index",
                    "rancher2/cluster-admin/tools/notifiers/_index",
                    {
                        type: "category",
                        label: "告警",
                        items: [
                            "rancher2/cluster-admin/tools/alerts/_index",
                            "rancher2/cluster-admin/tools/alerts/default-alerts/_index",
                        ],
                    },
                    {
                        type: "category",
                        label: "Istio",
                        items: [
                            "rancher2/cluster-admin/tools/istio/release-notes/_index",
                            "rancher2/cluster-admin/tools/istio/_index",
                            "rancher2/cluster-admin/tools/istio/resources/_index",
                            {
                                type: "category",
                                label: "Istio 使用指南",
                                items: [
                                    "rancher2/cluster-admin/tools/istio/setup/_index",
                                    {
                                        type: "category",
                                        label: "1、在集群中启用 Istio",
                                        items: [
                                            "rancher2/cluster-admin/tools/istio/setup/enable-istio-in-cluster/_index",
                                            "rancher2/cluster-admin/tools/istio/setup/enable-istio-in-cluster/enable-istio-with-psp/_index",
                                        ],
                                    },
                                    "rancher2/cluster-admin/tools/istio/setup/enable-istio-in-namespace/_index",
                                    "rancher2/cluster-admin/tools/istio/setup/node-selectors/_index",
                                    "rancher2/cluster-admin/tools/istio/setup/deploy-workloads/_index",
                                    "rancher2/cluster-admin/tools/istio/setup/gateway/_index",
                                    "rancher2/cluster-admin/tools/istio/setup/set-up-traffic-management/_index",
                                    "rancher2/cluster-admin/tools/istio/setup/view-traffic/_index",
                                ],
                            },
                            "rancher2/cluster-admin/tools/istio/rbac/_index",
                            "rancher2/cluster-admin/tools/istio/disabling-istio/_index",
                        ],
                    },
                    {
                        type: "category",
                        label: "日志",
                        items: [
                            "rancher2/cluster-admin/tools/logging/_index",
                            "rancher2/cluster-admin/tools/logging/elasticsearch/_index",
                            "rancher2/cluster-admin/tools/logging/fluentd/_index",
                            "rancher2/cluster-admin/tools/logging/kafka/_index",
                            "rancher2/cluster-admin/tools/logging/splunk/_index",
                            "rancher2/cluster-admin/tools/logging/syslog/_index",
                        ],
                    },
                    {
                        type: "category",
                        label: "监控",
                        items: [
                            "rancher2/cluster-admin/tools/monitoring/_index",
                            {
                                type: "category",
                                label: "集群参数",
                                items: [
                                    "rancher2/cluster-admin/tools/monitoring/cluster-metrics/_index",
                                    "rancher2/cluster-admin/tools/monitoring/cluster-metrics/custom-metrics/_index",
                                ],
                            },
                            "rancher2/cluster-admin/tools/monitoring/expression/_index",
                            "rancher2/cluster-admin/tools/monitoring/prometheus/_index",
                            "rancher2/cluster-admin/tools/monitoring/viewing-metrics/_index",
                        ],
                    },
                    "rancher2/cluster-admin/tools/opa-gatekeeper/_index",
                ],
            },
            "rancher2/cluster-admin/cloning-clusters/_index",
            "rancher2/cluster-admin/certificate-rotation/_index",
            "rancher2/cluster-admin/backing-up-etcd/_index",
            "rancher2/cluster-admin/restoring-etcd/_index",
            "rancher2/cluster-admin/cleaning-cluster-nodes/_index",
            "rancher2/cluster-admin/restore-kubecfg/_index",
            "rancher2/cluster-admin/restore-rkestate/_index",
            "rancher2/cluster-admin/replace-ca/_index",
            "rancher2/cluster-admin/single-to-ha/_index",
            "rancher2/cluster-admin/etcd-compact/_index",
            "rancher2/cluster-admin/webhooks/_index",
            "rancher2/cluster-admin/kubectl-delete-evicted-pods/_index",
        ],
        项目管理员指南: [
            "rancher2/project-admin/_index",
            "rancher2/project-admin/project-members/_index",
            {
                type: "category",
                label: "项目资源配额",
                items: [
                    "rancher2/project-admin/resource-quotas/_index",
                    "rancher2/project-admin/resource-quotas/quotas-for-projects/_index",
                    "rancher2/project-admin/resource-quotas/override-namespace-default/_index",
                    "rancher2/project-admin/resource-quotas/override-container-default/_index",
                    "rancher2/project-admin/resource-quotas/quota-type-reference/_index",
                ],
            },
            "rancher2/project-admin/namespaces/_index",
            {
                type: "category",
                label: "项目工具",
                items: [
                    "rancher2/project-admin/tools/_index",
                    "rancher2/project-admin/tools/alerts/_index",
                    "rancher2/project-admin/tools/logging/_index",
                    "rancher2/project-admin/tools/monitoring/_index",
                ],
            },
            "rancher2/project-admin/istio/_index",
            "rancher2/project-admin/pipelines/_index",
            "rancher2/project-admin/pod-security-policies/_index",
        ],
        用户指南: [
            "rancher2/k8s-in-rancher/_index",
            {
                type: "category",
                label: "工作负载",
                items: [
                    "rancher2/k8s-in-rancher/workloads/_index",
                    "rancher2/k8s-in-rancher/workloads/deploy-workloads/_index",
                    "rancher2/k8s-in-rancher/workloads/upgrade-workloads/_index",
                    "rancher2/k8s-in-rancher/workloads/rollback-workloads/_index",
                    "rancher2/k8s-in-rancher/workloads/add-a-sidecar/_index",
                ],
            },
            {
                type: "category",
                label: "Pod 弹性伸缩",
                items: [
                    "rancher2/k8s-in-rancher/horitzontal-pod-autoscaler/_index",
                    "rancher2/k8s-in-rancher/horitzontal-pod-autoscaler/hpa-background/_index",
                    "rancher2/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-rancher-ui/_index",
                    "rancher2/k8s-in-rancher/horitzontal-pod-autoscaler/manage-hpa-with-kubectl/_index",
                    "rancher2/k8s-in-rancher/horitzontal-pod-autoscaler/testing-hpa/_index",
                    "rancher2/k8s-in-rancher/horitzontal-pod-autoscaler/hpa-for-rancher-before-2_0_7/_index",
                ],
            },
            {
                type: "category",
                label: "负载均衡和 Ingress",
                items: [
                    "rancher2/k8s-in-rancher/load-balancers-and-ingress/_index",
                    "rancher2/k8s-in-rancher/load-balancers-and-ingress/load-balancers/_index",
                    "rancher2/k8s-in-rancher/load-balancers-and-ingress/ingress/_index",
                ],
            },
            "rancher2/k8s-in-rancher/service-discovery/_index",
            "rancher2/k8s-in-rancher/certificates/_index",
            "rancher2/k8s-in-rancher/configmaps/_index",
            "rancher2/k8s-in-rancher/secrets/_index",
            "rancher2/k8s-in-rancher/registries/_index",
            {
                type: "category",
                label: "流水线",
                items: [
                    "rancher2/k8s-in-rancher/pipelines/_index",
                    "rancher2/k8s-in-rancher/pipelines/concepts/_index",
                    "rancher2/k8s-in-rancher/pipelines/config/_index",
                    "rancher2/k8s-in-rancher/pipelines/example-repos/_index",
                    "rancher2/k8s-in-rancher/pipelines/example/_index",
                    "rancher2/k8s-in-rancher/pipelines/storage/_index",
                    "rancher2/k8s-in-rancher/pipelines/docs-for-v2.0.x/_index",
                ],
            },
        ],
        应用商店: [
            "rancher2/catalog/_index",
            "rancher2/catalog/built-in/_index",
            "rancher2/catalog/adding-catalogs/_index",
            "rancher2/catalog/catalog-config/_index",
            "rancher2/catalog/creating-apps/_index",
            "rancher2/catalog/managing-apps/_index",
            "rancher2/catalog/multi-cluster-apps/_index",
            "rancher2/catalog/launching-apps/_index",
            "rancher2/catalog/tutorial/_index",
            "rancher2/catalog/globaldns/_index",
        ],
        Rancher命令行: ["rancher2/cli/_index"],
        系统工具: ["rancher2/system-tools/_index"],
        用户设置: [
            "rancher2/user-settings/_index",
            "rancher2/user-settings/api-keys/_index",
            "rancher2/user-settings/node-templates/_index",
            "rancher2/user-settings/cloud-credentials/_index",
            "rancher2/user-settings/preferences/_index",
        ],
        API: [
            "rancher2/api/_index",
            "rancher2/api/api-tokens/_index",
            "rancher2/api/api-resources/_index",
            "rancher2/api/api-custom-cluster/_index",
            "rancher2/api/api-import-cluster/_index",
        ],
        安全: [
            "rancher2/security/_index",
            "rancher2/security/security-scan/_index",
            "rancher2/security/cve/_index",
            {
                type: "category",
                label: "安全加固指南",
                items: [
                    "rancher2/security/hardening-2.4/_index",
                    "rancher2/security/hardening-2.3.5/_index",
                    "rancher2/security/hardening-2.3.3/_index",
                    "rancher2/security/hardening-2.3/_index",
                    "rancher2/security/hardening-2.2/_index",
                    "rancher2/security/hardening-2.1/_index",
                ],
            },
            {
                type: "category",
                label: "CIS自测指南",
                items: [
                    "rancher2/security/benchmark-2.4/_index",
                    "rancher2/security/benchmark-2.3.5/_index",
                    "rancher2/security/benchmark-2.3.3/_index",
                    "rancher2/security/benchmark-2.3/_index",
                    "rancher2/security/benchmark-2.2/_index",
                    "rancher2/security/benchmark-2.1/_index",
                ],
            },
        ],
        常见问题: [
            "rancher2/faq/_index",
            //"rancher2/faq/deprecated-features-25x/_index",
            "rancher2/faq/upgrades-to-2x/_index",
            "rancher2/faq/kubectl/_index",
            {
                type: "category",
                label: "网络",
                items: [
                    "rancher2/faq/networking/_index",
                    "rancher2/faq/networking/cni-providers/_index",
                    "rancher2/faq/networking/mtu/_index",
                ],
            },
            "rancher2/faq/technical/_index",
            "rancher2/faq/security/_index",
            "rancher2/faq/telemetry/_index",
            "rancher2/faq/removing-rancher/_index",
            "rancher2/faq/etcd/_index",
            "rancher2/faq/install/_index",
        ],

        //TODO: remove comment after translation of 2.5 docs is done, it possibly needs to readjust its position in sidebar
        /*
        跨集群部署:[
                    "rancher2/deploy-across-clusters/_index",
                    "rancher2/deploy-across-clusters/fleet/_index",
                    "rancher2/deploy-across-clusters/multi-cluster-apps/_index",
                ]
        */

        //TODO: remove comment after translation of 2.5 docs is done, it possibly needs to readjust its position in sidebar
        /*
        HelmChart:[
            "rancher2/helm-charts/app-marketplace/_index",
            {
                type: "category",
                label: "legacy catalogs",
                items: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
            },
        ]
        */
        //TODO: remove comment after translation of 2.5 docs is done, it possibly needs to readjust its position in sidebar
        /*
        monitoringalerting: [
            {
                type: "category",
                label: "2.0-2.4",
                items: ["", "", "", ""],
            },
            {
                type: "category",
                label: "2.5",
                items: ["", "", "", ""],
            },
        ],
        */
        //TODO: remove comment after translation of 2.5 docs is done, it possibly needs to readjust its position in sidebar
        /*
        istio:[],
        */
        //TODO: remove comment after translation of 2.5 docs is done, it possibly needs to readjust its position in sidebar
        /*
        logging:[
            "rancher2/logging/_index",
            {
                type: "category",
                label: "2.0-2.4",
                items: ["", "", "", ""],
            },
            {
                type: "category",
                label: "2.5",
                items: ["", "", "", ""],
            },
        ],
        */
        //TODO: remove comment after translation of 2.5 docs is done, it possibly needs to readjust its position in sidebar
        /*
       cis-scans:[
           "rancher2/cis-scans/_index",
            {
                type: "category",
                label: "2.4",
                items: ["", "", "", ""],
            },
            {
                type: "category",
                label: "2.5",
                items: ["", "", "", ""],
            },
        ],
       */
        常见故障排查: [
            "rancher2/troubleshooting/_index",
            {
                type: "category",
                label: "Kubernetes 组件",
                items: [
                    "rancher2/troubleshooting/kubernetes-components/_index",
                    "rancher2/troubleshooting/kubernetes-components/etcd/_index",
                    "rancher2/troubleshooting/kubernetes-components/controlplane/_index",
                    "rancher2/troubleshooting/kubernetes-components/nginx-proxy/_index",
                    "rancher2/troubleshooting/kubernetes-components/worker-and-generic/_index",
                ],
            },
            "rancher2/troubleshooting/kubernetes-resources/_index",
            "rancher2/troubleshooting/networking/_index",
            "rancher2/troubleshooting/dns/_index",
            "rancher2/troubleshooting/rancherha/_index",
            "rancher2/troubleshooting/imported-clusters/_index",
            "rancher2/troubleshooting/logging/_index",
        ],
        参与Rancher开源项目: ["rancher2/contributing/_index"],
        版本迁移: [
            "rancher2/v1.6-migration/_index",
            "rancher2/v1.6-migration/kub-intro/_index",
            "rancher2/v1.6-migration/get-started/_index",
            {
                type: "category",
                label: "2、迁移服务",
                items: [
                    "rancher2/v1.6-migration/run-migration-tool/_index",
                    "rancher2/v1.6-migration/run-migration-tool/migration-tools-ref/_index",
                ],
            },
            "rancher2/v1.6-migration/expose-services/_index",
            "rancher2/v1.6-migration/monitor-apps/_index",
            "rancher2/v1.6-migration/schedule-workloads/_index",
            "rancher2/v1.6-migration/discover-services/_index",
            "rancher2/v1.6-migration/load-balancing/_index",
        ],
    },
    rke: {
        产品介绍: ["rke/_index"],
        安装要求: ["rke/os/_index"],
        安装介绍: ["rke/installation/_index", "rke/installation/certs/_index"],
        升级指南: [
            "rke/upgrades/_index",
            "rke/upgrades/how-upgrades-work/_index",
            "rke/upgrades/maintaining-availability/_index",
            "rke/upgrades/configuring-strategy/_index",
        ],
        kubeconfig文件: ["rke/kubeconfig/_index"],
        备份和恢复指南: [
            "rke/etcd-snapshots/_index",
            "rke/etcd-snapshots/one-time-snapshots/_index",
            "rke/etcd-snapshots/recurring-snapshots/_index",
            "rke/etcd-snapshots/restoring-from-backup/_index",
            "rke/etcd-snapshots/example-scenarios/_index",
            "rke/etcd-snapshots/troubleshooting/_index",
        ],
        证书管理: ["rke/cert-mgmt/_index"],
        节点管理: ["rke/managing-clusters/_index"],
        Kubernetes配置选项: [
            "rke/config-options/_index",
            "rke/config-options/nodes/_index",
            "rke/config-options/private-registries/_index",
            "rke/config-options/bastion-host/_index",
            "rke/config-options/system-images/_index",
            {
                type: "category",
                label: "默认的Kubernetes服务",
                items: [
                    "rke/config-options/services/_index",
                    "rke/config-options/services/services-extras/_index",
                    "rke/config-options/services/external-etcd/_index",
                ],
            },
            "rke/config-options/secrets-encryption/_index",
            "rke/config-options/authentication/_index",
            "rke/config-options/authorization/_index",
            "rke/config-options/rate-limiting/_index",
            {
                type: "category",
                label: "云服务提供商",
                items: [
                    "rke/config-options/cloud-providers/_index",
                    "rke/config-options/cloud-providers/aws/_index",
                    "rke/config-options/cloud-providers/azure/_index",
                    "rke/config-options/cloud-providers/openstack/_index",
                    {
                        type: "category",
                        label: "vSphere",
                        items: [
                            "rke/config-options/cloud-providers/vsphere/_index",
                            "rke/config-options/cloud-providers/vsphere/enabling-uuid/_index",
                            "rke/config-options/cloud-providers/vsphere/config-reference/_index",
                            "rke/config-options/cloud-providers/vsphere/troubleshooting/_index",
                        ],
                    },
                    "rke/config-options/cloud-providers/custom/_index",
                ],
            },
            "rke/config-options/audit-log/_index",
            {
                type: "category",
                label: "RKE 插件",
                items: [
                    "rke/config-options/add-ons/_index",
                    {
                        type: "category",
                        label: "网络插件",
                        items: [
                            "rke/config-options/add-ons/network-plugins/_index",
                            "rke/config-options/add-ons/network-plugins/custom-network-plugin-example/_index",
                        ],
                    },
                    "rke/config-options/add-ons/dns/_index",
                    "rke/config-options/add-ons/ingress-controllers/_index",
                    "rke/config-options/add-ons/metrics-server/_index",
                    "rke/config-options/add-ons/user-defined-add-ons/_index",
                ],
            },
        ],
        yaml文件示例: ["rke/example-yamls/_index"],
        常见问题排查: [
            "rke/troubleshooting/_index",
            "rke/troubleshooting/ssh-connectivity-errors/_index",
            "rke/troubleshooting/provisioning-errors/_index",
        ],
    },
    k3s: {
        K3s介绍: ["k3s/_index"],
        架构: ["k3s/architecture/_index"],
        快速入门: ["k3s/quick-start/_index"],
        安装: [
            "k3s/installation/_index",
            "k3s/installation/installation-requirements/_index",
            {
                type: "category",
                label: "安装选项",
                items: [
                    "k3s/installation/install-options/_index",
                    "k3s/installation/install-options/server-config/_index",
                    "k3s/installation/install-options/agent-config/_index",
                    "k3s/installation/install-options/how-to-flags/_index",
                ],
            },
            "k3s/installation/network-options/_index",
            "k3s/installation/ha/_index",
            "k3s/installation/ha-embedded/_index",
            "k3s/installation/datastore/_index",
            "k3s/installation/private-registry/_index",
            "k3s/installation/airgap/_index",
            "k3s/installation/kube-dashboard/_index",
            "k3s/installation/uninstall/_index",
        ],
        集群访问: ["k3s/cluster-access/_index"],
        升级: [
            "k3s/upgrades/_index",
            "k3s/upgrades/killall/_index",
            "k3s/upgrades/basic/_index",
            "k3s/upgrades/automated/_index",
        ],
        备份和恢复: ["k3s/backup-restore/_index"],
        卷和存储: ["k3s/storage/_index"],
        网络: ["k3s/networking/_index"],
        Helm: ["k3s/helm/_index"],
        高级选项和配置: ["k3s/advanced/_index"],
        常见问题: ["k3s/faq/_index"],
        已知问题: ["k3s/known-issues/_index"],
    },
    octopus: {
        产品介绍: ["octopus/about/_index"],
        快速入门: ["octopus/quick-start/_index"],
        安装部署: ["octopus/install/_index"],
        DeviceLink: [
            "octopus/device-link/_index",
            "octopus/device-link/state-of-dl/_index",
        ],
        适配器: [
            "octopus/adaptors/_index",
            "octopus/adaptors/modbus/_index",
            "octopus/adaptors/opc-ua/_index",
            "octopus/adaptors/mqtt/_index",
            "octopus/adaptors/ble/_index",
            "octopus/adaptors/dummy/_index",
            "octopus/adaptors/mqtt-extension/_index",
            "octopus/adaptors/develop/_index",
        ],
        开发指南: ["octopus/develop/_index"],
        关于监控: ["octopus/monitoring/_index"],
        UI界面: ["octopus/octopus-ui/_index"],
        常见问题: ["octopus/faq/_index"],
    },
    rancher1: {
        产品介绍: ["rancher1/_index"],
        快速入门: [
            "rancher1/overview/start/_index",
            "rancher1/overview/native-docker/_index",
        ],
        安装指南: [
            "rancher1/installation/basic-ssl-config/_index",
            "rancher1/installation/installing-server/_index",
            "rancher1/installation/no-internet-access/_index",
            "rancher1/installation/selinux/_index",
        ],
        配置参考: [
            {
                type: "category",
                label: "应用商店",
                items: [
                    "rancher1/configurations/catalog/_index",
                    "rancher1/configurations/catalog/private-catalog/_index",
                ],
            },
            {
                type: "category",
                label: "cli",
                items: [
                    "rancher1/configurations/cli/_index",
                    "rancher1/configurations/cli/commands/_index",
                    "rancher1/configurations/cli/variable-interpolation/_index",
                ],
            },
            {
                type: "category",
                label: "环境",
                items: [
                    "rancher1/configurations/environments/_index",
                    "rancher1/configurations/environments/access-control/_index",
                    "rancher1/configurations/environments/accounts/_index",
                    "rancher1/configurations/environments/audit-log/_index",
                    "rancher1/configurations/environments/certificates/_index",
                    "rancher1/configurations/environments/ecr_updater/_index",
                    "rancher1/configurations/environments/machine-drivers/_index",
                    "rancher1/configurations/environments/registries/_index",
                    "rancher1/configurations/environments/settings/_index",
                ],
            },
        ],
        基础设施: [
            {
                type: "category",
                label: "cattle",
                items: [
                    "rancher1/infrastructure/cattle/adding-external-services/_index",
                    "rancher1/infrastructure/cattle/adding-load-balancers/_index",
                    "rancher1/infrastructure/cattle/adding-service-alias/_index",
                    "rancher1/infrastructure/cattle/adding-services/_index",
                    "rancher1/infrastructure/cattle/containers/_index",
                    "rancher1/infrastructure/cattle/external-dns-service/_index",
                    "rancher1/infrastructure/cattle/health-checks/_index",
                    "rancher1/infrastructure/cattle/internal-dns-service/_index",
                    "rancher1/infrastructure/cattle/labels/_index",
                    {
                        type: "category",
                        label: "编排",
                        items: [
                            "rancher1/infrastructure/cattle/rancher-compose/_index",
                            "rancher1/infrastructure/cattle/rancher-compose/environment-interpolation/_index",
                            "rancher1/infrastructure/cattle/rancher-compose/commands/_index",
                        ],
                    },
                    "rancher1/infrastructure/cattle/scheduling/_index",
                    "rancher1/infrastructure/cattle/secrets/_index",
                    "rancher1/infrastructure/cattle/stacks/_index",
                    "rancher1/infrastructure/cattle/upgrading/_index",
                    "rancher1/infrastructure/cattle/vms/_index",
                    "rancher1/infrastructure/cattle/volume/_index",
                    "rancher1/infrastructure/cattle/webhook-service/_index",
                ],
            },
            {
                type: "category",
                label: "hosts",
                items: [
                    "rancher1/infrastructure/hosts/_index",
                    "rancher1/infrastructure/hosts/amazon/_index",
                    "rancher1/infrastructure/hosts/azure/_index",
                    "rancher1/infrastructure/hosts/custom/_index",
                    "rancher1/infrastructure/hosts/digitalocean/_index",
                    "rancher1/infrastructure/hosts/exoscale/_index",
                    "rancher1/infrastructure/hosts/other/_index",
                    "rancher1/infrastructure/hosts/packet/_index",
                    "rancher1/infrastructure/hosts/rackspace/_index",
                ],
            },
            "rancher1/infrastructure/mesos/_index",
            "rancher1/infrastructure/swarm/_index",
            "rancher1/infrastructure/windows/_index",
        ],
        基础服务: [
            "rancher1/rancher-service/_index",
            "rancher1/rancher-service/dns-service/_index",
            "rancher1/rancher-service/load-balancer/_index",
            "rancher1/rancher-service/metadata-service/_index",
            "rancher1/rancher-service/network-policy/_index",
            "rancher1/rancher-service/networking/_index",
            "rancher1/rancher-service/scheduler/_index",
            "rancher1/rancher-service/service-accounts/_index",
            {
                type: "category",
                label: "存储服务",
                items: [
                    "rancher1/rancher-service/storage-services/_index",
                    "rancher1/rancher-service/storage-services/rancher-ebs/_index",
                    "rancher1/rancher-service/storage-services/rancher-nfs/_index",
                ],
            },
        ],

        升级指南: ["rancher1/upgrade/_index"],
        常见问题: [
            "rancher1/faq/_index",
            "rancher1/faq/agents/_index",
            "rancher1/faq/docker/_index",
            "rancher1/faq/kubernetes/_index",
            "rancher1/faq/server/_index",
        ],
    },
};
