import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import TagCloud from 'TagCloud';

@Component({
  selector: 'app-icon-cloud',
  standalone: true,
  template: `
    <div class="icon-cloud-wrapper">
      <div #tagCloudContainer class="tagcloud"></div>
    </div>
  `,
  styles: [
    `
      .icon-cloud-wrapper {
        width: 100%;
        height: 100%;
        min-height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .tagcloud {
        display: inline-block;
        font-weight: 600;
        letter-spacing: 0.0625em;
        line-height: 1.5;
      }

      :host ::ng-deep .tagcloud--item {
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: inline-flex !important;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: transparent !important;
        background: transparent;
      }

      :host ::ng-deep .tagcloud--item:hover .icon-circle {
        transform: scale(1.2);
        background: linear-gradient(
          135deg,
          rgba(99, 102, 241, 0.2) 0%,
          rgba(139, 92, 246, 0.2) 100%
        );
        border-color: rgba(139, 92, 246, 0.4);
        box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3),
          0 0 0 4px rgba(99, 102, 241, 0.1),
          inset 0 0 20px rgba(255, 255, 255, 0.1);
      }

      :host ::ng-deep .tagcloud--item:hover .icon-label {
        opacity: 1;
        transform: translateY(-2px);
        color: rgba(139, 92, 246, 1);
        text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
      }

      :host ::ng-deep .icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;
      }

      :host ::ng-deep .icon-circle {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.07) 0%,
          rgba(255, 255, 255, 0.03) 100%
        );
        backdrop-filter: blur(12px);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1),
          inset 0 0 10px rgba(255, 255, 255, 0.05);
        position: relative;
        overflow: hidden;
      }

      :host ::ng-deep .icon-circle::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          45deg,
          transparent,
          rgba(255, 255, 255, 0.1),
          transparent
        );
        transform: rotate(45deg);
        transition: all 0.6s ease;
      }

      :host ::ng-deep .tagcloud--item:hover .icon-circle::before {
        left: 100%;
      }

      :host ::ng-deep .tagcloud--item img {
        width: 46px !important;
        height: 46px !important;
        object-fit: contain;
        pointer-events: none;
        display: block;
        filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;
      }

      :host ::ng-deep .tagcloud--item:hover img {
        filter: drop-shadow(0 6px 20px rgba(139, 92, 246, 0.4));
        transform: rotate(-5deg) scale(1.05);
      }

      :host ::ng-deep .icon-label {
        font-size: 0.72rem;
        font-weight: 600;
        color: var(--color-text-primary, #ffffff);
        text-align: center;
        white-space: nowrap;
        opacity: 0.8;
        pointer-events: none;
        transition: all 0.3s ease;
        letter-spacing: 0.3px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        .icon-cloud-wrapper {
          min-height: 380px;
        }

        :host ::ng-deep .icon-circle {
          width: 65px;
          height: 65px;
        }

        :host ::ng-deep .tagcloud--item img {
          width: 40px !important;
          height: 40px !important;
        }

        :host ::ng-deep .icon-label {
          font-size: 0.68rem;
        }
      }

      @media (max-width: 480px) {
        .icon-cloud-wrapper {
          min-height: 320px;
        }

        :host ::ng-deep .icon-circle {
          width: 58px;
          height: 58px;
        }

        :host ::ng-deep .tagcloud--item img {
          width: 36px !important;
          height: 36px !important;
        }

        :host ::ng-deep .icon-label {
          font-size: 0.65rem;
        }

        :host ::ng-deep .icon-wrapper {
          gap: 0.45rem;
        }
      }
    `,
  ],
})
export class IconCloudComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('tagCloudContainer', { static: false })
  tagCloudContainer!: ElementRef;

  @Input() icons: { name: string; image: string }[] = [];
  @Input() radius: number = 300;
  @Input() maxSpeed: string = 'normal';
  @Input() initSpeed: string = 'normal';
  @Input() direction: number = 135;
  @Input() keep: boolean = true;

  private tagCloudInstance: any;
  private isPaused: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initializeTagCloud();
    this.setupHoverPause();
  }

  private setupHoverPause() {
    if (!isPlatformBrowser(this.platformId) || !this.tagCloudContainer) {
      return;
    }

    const container = this.tagCloudContainer.nativeElement;

    container.addEventListener('mouseenter', () => {
      if (this.tagCloudInstance && this.tagCloudInstance.pause) {
        this.tagCloudInstance.pause();
        this.isPaused = true;
      }
    });

    container.addEventListener('mouseleave', () => {
      if (this.tagCloudInstance && this.tagCloudInstance.resume) {
        this.tagCloudInstance.resume();
        this.isPaused = false;
      }
    });
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.handleResize);

      if (this.tagCloudInstance) {
        try {
          this.tagCloudInstance.destroy();
        } catch (e) {
          // TagCloud might not have destroy method in all versions
          const container = this.tagCloudContainer?.nativeElement;
          if (container) {
            container.innerHTML = '';
          }
        }
      }
    }
  }

  private initializeTagCloud() {
    if (!this.tagCloudContainer || !this.icons.length) {
      return;
    }

    const container = this.tagCloudContainer.nativeElement;

    // Create HTML elements for each icon with label
    const iconElements = this.icons.map((icon) => {
      return `<div class="icon-wrapper">
        <div class="icon-circle">
          <img src="${icon.image}" alt="${icon.name}" title="${icon.name}" />
        </div>
        <span class="icon-label">${icon.name}</span>
      </div>`;
    });

    try {
      // Initialize TagCloud
      this.tagCloudInstance = TagCloud(container, iconElements, {
        radius: this.getResponsiveRadius(),
        maxSpeed: this.maxSpeed,
        initSpeed: this.initSpeed,
        direction: this.direction,
        keep: this.keep,
        useHTML: true,
      });

      // Handle window resize
      window.addEventListener('resize', this.handleResize);
    } catch (error) {
      console.error('Error initializing TagCloud:', error);
    }
  }

  private getResponsiveRadius(): number {
    if (!isPlatformBrowser(this.platformId)) {
      return this.radius;
    }

    const width = window.innerWidth;
    if (width < 480) {
      return Math.min(this.radius * 0.4, 150);
    } else if (width < 768) {
      return Math.min(this.radius * 0.6, 200);
    } else if (width < 1024) {
      return Math.min(this.radius * 0.8, 250);
    }
    return this.radius;
  }

  private handleResize = () => {
    if (this.tagCloudInstance) {
      const newRadius = this.getResponsiveRadius();
      // Reinitialize with new radius
      this.ngOnDestroy();
      setTimeout(() => {
        this.initializeTagCloud();
      }, 100);
    }
  };
}
