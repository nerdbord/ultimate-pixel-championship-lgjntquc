type RouteHandler = () => void;

interface Route {
   path: string;
   handler: RouteHandler;
}

const router = {
   routes: [] as Route[],
   currentPath: '',

   addRoute(path: string, handler: RouteHandler): void {
      this.routes.push({ path, handler });
   },

   navigateTo(path: string): void {
      const route = this.routes.find((route) => route.path === path);

      if (route) {
         route.handler();
         this.currentPath = path;
      } else {
         console.error(`Route not found: ${path}`);
      }
   },

   navigateToWizard(): void {
      const currentIndex = this.routes.findIndex((route) => route.path === this.currentPath);

      const nextIndex = currentIndex + 1;

      if (nextIndex < this.routes.length) {
         const nextRoute = this.routes[nextIndex];
         this.navigateTo(nextRoute.path);
      }
   },
};

export default router;
