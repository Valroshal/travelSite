import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'travelSite';

}

// code from stack_overflow to change the color for menu bar
// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       <router-outlet></router-outlet>
//       <app-menu></app-menu>
//     </div>
//   `
// })
// export class AppComponent implements OnInit {
//   constructor(
//     @Inject(DOCUMENT) private document, 
//     private renderer: Renderer2, 
//     private router: Router, 
//     private activatedRoute: ActivatedRoute) {
//   }

//   ngOnInit() {
//     this.router.events
//       .pipe(filter((event) => event instanceof NavigationEnd))
//       .pipe(map(() => this.activatedRoute))
//       .pipe(map((route) => {
//         while (route.firstChild) {
//           route = route.firstChild;
//         }
//         return route;
//       }))
//       .pipe(filter((route) => route.outlet === 'primary'))
//       .pipe(mergeMap((route) => route.data))
//       .subscribe((event) => this.updateBodyClass(event.bodyClass));
//   }

//   private updateBodyClass(customBodyClass?: string) {
//     this.renderer.setAttribute(this.document?.body, 'class', '');
//     if (customBodyClass) {
//       this.renderer.addClass(this.document?.body, customBodyClass);
//     }
//   }
// }
