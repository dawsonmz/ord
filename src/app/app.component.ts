import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Module } from './module'
import { SanityService } from './service/sanity.service'

@Component({
    selector: 'app-root',
    imports: [ RouterOutlet ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    constructor(private sanityService: SanityService) {}

    title = 'ord';
    modules: Module[] = [];

    ngOnInit(): void {
        this.getModules();
    }

    async getModules(): Promise<Module[]> {
        this.modules = await this.sanityService.getModules();
        return this.modules;
    }
}
