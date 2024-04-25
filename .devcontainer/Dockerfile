FROM archlinux AS base

RUN pacman -Syy

RUN pacman -S zsh tmux git neovim gcc ripgrep nodejs-lts-iron npm kubectl --noconfirm
RUN npm install -g nodemon

RUN sed -i -e 's/^SHELL=\/usr\/bin\/bash/SHELL=\/usr\/bin\/zsh/g' /etc/default/useradd

RUN groupadd developer && \
    useradd developer -g developer -m
USER developer

EXPOSE 80
EXPOSE 9229
EXPOSE 5500

ENTRYPOINT [ "sleep" , "infinity" ]
