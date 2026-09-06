# Deployment Guide

The landing deploys through the [homelab](https://github.com/mateuseap/homelab) GitOps cluster. Application code lives in this repo; Kubernetes manifests live in homelab under `apps/originlabs-landing/` with ArgoCD Application `argocd/app-originlabs-landing.yaml`.

## Images

CI builds and pushes immutable images on every merge:

```text
ghcr.io/originlabsbr/originlabs-landing:<commit-sha>
```

The image is private and runs unprivileged nginx on port 8080. The cluster pulls with a sealed `ghcr-pull` dockerconfig secret scoped to the namespace.

## Environments

| Environment | Host | Notes |
|-------------|------|-------|
| Staging | `originlabs.lab.mateuseap.com` | Live, TLS via cert-manager |
| Production | `originlabsbr.com`, `originlabsbr.com.br` | Separate ingress; issues TLS once DNS points at the homelab node |

## Verification

After an ArgoCD sync (`Synced Healthy`), verify:

```bash
curl -o /dev/null -w 'staging http=%{http_code} tls=%{ssl_verify_result}\n' https://originlabs.lab.mateuseap.com/
kubectl -n originlabs-landing get pods
kubectl -n argocd get application originlabs-landing
```

Expected: landing `200` with valid TLS, pod `1/1 Running`, Application `Synced Healthy`.
