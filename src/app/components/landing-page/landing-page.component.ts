import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('section') section!: ElementRef;


  backgroundImageUrl: string = 'https://i.imgur.com/kPX6F0F.jpeg';
  backgroundImageUrlRecife: string = 'https://i.imgur.com/EffXBgU.jpeg';
  backgroundImageDemaisTelas: string = 'https://i.imgur.com/xAjkMsa.png';
  backgroungLogo: String = 'https://imgur.com/61tciKy.png';

  constructor() {
    // library.addIcons(faTwitter)
    // library.addIcons(faFacebook)
    // library.addIcons(faInstagram)
    // library.addIcons(faPlug)
    // library.addIcons(faCoffee)
    // library.addIcons(faClock)
   }

  ngOnInit(): void {
     // Selecione todos os links da página
     const links = document.querySelectorAll('a[href^="#"]');

     // Adicione um ouvinte de eventos a cada link
     links.forEach(link => {
       link.addEventListener('click', (event) => {
         event.preventDefault();
         const targetId = link.getAttribute('href')?.substring(1);
         const targetElement = document.getElementById(targetId!);
         if (targetElement) {
           scrollToElement(targetElement);
         }
       });
     });
 
     // Função scrollToElement
     function scrollToElement(element: HTMLElement) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
    AOS.init();
  }

  ngAfterViewInit() {
    this.pushSectionOnNavbarCollapse();
  }

  pushSectionOnNavbarCollapse() {
    if (this.navbar?.nativeElement && this.section?.nativeElement) {
      this.navbar.nativeElement.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          this.section.nativeElement.style.marginTop = this.navbar.nativeElement.clientHeight + 'px';
        } else {
          this.section.nativeElement.style.marginTop = '0';
        }
      });
  
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          this.section.nativeElement.style.marginTop = '0';
        }
      });
    }
  }
  

}
