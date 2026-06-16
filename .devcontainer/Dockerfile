FROM docker.io/archlinux/archlinux:latest

# Update system
RUN pacman -Syu --noconfirm

# Install essential devcontainer tools
RUN pacman -S --noconfirm \
    base-devel \
    zsh \
    openssh \
    git \
    curl \
    wget \
    vim \
    npm

# Create non-root user for devcontainer
RUN useradd -m -s /bin/zsh developer && \
    echo "developer ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/developer

# Set working directory
WORKDIR /workspaces

# Install Coding Agent
RUN npm install -g --ignore-scripts @earendil-works/pi-coding-agent

# Prevent container from exiting
CMD ["/bin/sleep", "infinity"]