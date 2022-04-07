// Methods to determine the type & permissions of user given what is stored in local storage.

export const isUser = () => {
    if (!localStorage.getItem("perm")) {
        return false;
    }
    return localStorage.getItem("perm").charAt(0) == 1 || localStorage.getItem("perm").charAt(2) == 1
    || localStorage.getItem("perm").charAt(4) == 1 || localStorage.getItem("perm").charAt(6) == 1
    || localStorage.getItem("perm").charAt(8) == 1;
}

export const isProf = () => {
    if (!localStorage.getItem("perm")) {
        return false;
    }
    return localStorage.getItem("perm").charAt(4) == 1;
}

export const isTA = () => {
    if (!localStorage.getItem("perm")) {
        return false;
    }
    return localStorage.getItem("perm").charAt(2) == 1;
}

export const isAdmin = () => {
    if (!localStorage.getItem("perm")) {
        return false;
    }
    return localStorage.getItem("perm").charAt(6) == 1;
}

export const isSysOp = () => {
    if (!localStorage.getItem("perm")) {
        return false;
    }
    return localStorage.getItem("perm").charAt(8) == 1;
}