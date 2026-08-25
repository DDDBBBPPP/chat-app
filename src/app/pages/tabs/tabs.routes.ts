import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/chats',
                pathMatch: 'full',
            },
            {

                path: 'chats',
                loadComponent: () => import('..//tabs/chats/chats.page').then(m => m.ChatsPage)
            },
            {
                path: 'status',
                loadComponent: () => import('..//tabs/status/status.page').then(m => m.StatusPage)
            },
            {
                path: 'contacts',
                loadComponent: () => import('..//tabs/contacts/contacts.page').then(m => m.ContactsPage)
            },
            {
                path: 'settings',
                loadComponent: () => import('..//tabs/settings/settings.page').then(m => m.SettingsPage)
            },

        ]
    }
]