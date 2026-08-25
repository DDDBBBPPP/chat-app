import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  paletteToggle = signal<boolean>(false);

  initColorPalette(){
    const prefersDark = window.matchMedia('(prefers-color-scheme:dark)');
    console.log(prefersDark.matches);
    //Initialize the dark palette based on the initial

    // value of the prefers color-scheme media query

     this.initializeDarkPalette(prefersDark.matches); 

    //Initialize the dark palette based on the initial
     this.initializeDarkPalette(true);

    //Listen for changes to the prefers-color-cheme media query
     prefersDark.addEventListener('change',
      (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches)); 


  }
  // Check/unchecl the toggle and update the palette based on IsDark
  initializeDarkPalette(isDark: boolean) {
    this.paletteToggle.set(isDark);
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(ev: any) {
    this.toggleDarkPalette(ev.detail.checked);

  }

  //Add or remove ion-palette-dark class on the html element
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

}
