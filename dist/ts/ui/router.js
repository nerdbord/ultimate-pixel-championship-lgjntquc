const router = {
    routes: [],
    currentPath: '',
    addRoute(path, handler) {
        this.routes.push({ path, handler });
    },
    navigateTo(path) {
        const route = this.routes.find((route) => route.path === path);
        // window.history.pushState({}, '', path);
        if (route) {
            route.handler();
            this.currentPath = path;
        }
        else {
            console.error(`Route not found: ${path}`);
        }
    },
    navigateForward() {
        const currentIndex = this.routes.findIndex((route) => route.path === this.currentPath);
        const nextIndex = currentIndex + 1;
        if (nextIndex < this.routes.length) {
            const nextRoute = this.routes[nextIndex];
            this.navigateTo(nextRoute.path);
        }
    },
};
export default router;
