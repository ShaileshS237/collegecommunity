import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'registation',
    loadChildren: () =>
      import('./pages/registation/registation.module').then(
        (m) => m.RegistationPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'otpverify',
    loadChildren: () =>
      import('./pages/otpverify/otpverify.module').then(
        (m) => m.OtpverifyPageModule
      ),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'categoryadds',
    loadChildren: () =>
      import('./pages/categoryadds/categoryadds.module').then(
        (m) => m.CategoryaddsPageModule
      ),
  },
  {
    path: 'categoryadds/:id',
    loadChildren: () =>
      import('./pages/categoryadds/categoryadds.module').then(
        (m) => m.CategoryaddsPageModule
      ),
  },
  {
    path: 'yourads',
    loadChildren: () =>
      import('./pages/yourads/yourads.module').then((m) => m.YouradsPageModule),
  },
  {
    path: 'market',
    loadChildren: () =>
      import('./pages/market/market.module').then((m) => m.MarketPageModule),
  },
  {
    path: 'mainlogin',
    loadChildren: () =>
      import('./pages/mainlogin/mainlogin.module').then(
        (m) => m.MainloginPageModule
      ),
  },
  {
    path: 'verifyemail',
    loadChildren: () =>
      import('./pages/verifyemail/verifyemail.module').then(
        (m) => m.VerifyemailPageModule
      ),
  },
  {
    path: 'fees',
    loadChildren: () =>
      import('./pages/fees/fees.module').then((m) => m.FeesPageModule),
  },
  {
    path: 'invite',
    loadChildren: () =>
      import('./pages/invite/invite.module').then((m) => m.InvitePageModule),
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./pages/onboarding/onboarding.module').then(
        (m) => m.OnboardingPageModule
      ),
  },
  {
    path: 'answer',
    loadChildren: () =>
      import('./pages/answer/answer.module').then((m) => m.AnswerPageModule),
  },
  {
    path: 'changepassword',
    loadChildren: () =>
      import('./pages/changepassword/changepassword.module').then(
        (m) => m.ChangepasswordPageModule
      ),
  },
  {
    path: 'singlepost',
    loadChildren: () =>
      import('../app/pages/fees/singlepost/singlepost.module').then(
        (m) => m.SinglepostPageModule
      ),
  },
  {
    path: 'singlepost/:id',
    loadChildren: () =>
      import('../app/pages/fees/singlepost/singlepost.module').then(
        (m) => m.SinglepostPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
