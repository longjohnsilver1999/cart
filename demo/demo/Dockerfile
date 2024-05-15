ARG VARIANT="11"
FROM mcr.microsoft.com/vscode/devcontainers/java:${VARIANT}
RUN sudo apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends maven
