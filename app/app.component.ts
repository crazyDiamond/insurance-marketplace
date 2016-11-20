import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">Insurance Marketplace!</a>
            </div>
        </nav>
    </header>
    <div class="jumbotron" >
      <h1 align="center">Welcome to</h1>
      <h1 align="center">Insurance Marketplace!</h1>
      <div *ngIf="users">
          <div *ngFor="let user of users">
            {{user.name}} ({{user.username}})
          </div>
      </div>
    </div>
    
    <footer class="text-center">
        Copyright &copy; 2016
    </footer>
    `,
    styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
    message = 'Hello!';
    users = [{ id: 25, name: 'Lane', username: 'crazyLane'},
        {id:26, name: 'Henry', username: 'henryThe'},
        {id:27, name: 'Jennifer', username: 'jFur'}
    ]
}