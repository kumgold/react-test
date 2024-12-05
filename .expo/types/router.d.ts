/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/components/CustomerScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/FeedbackForm`; params?: Router.UnknownInputParams; } | { pathname: `/components/LittleLemonFooter`; params?: Router.UnknownInputParams; } | { pathname: `/components/LittleLemonHeader`; params?: Router.UnknownInputParams; } | { pathname: `/components/LoginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/MenuItems`; params?: Router.UnknownInputParams; } | { pathname: `/components/SettingsScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/WelcomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/useUpdate`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/components/CustomerScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/components/FeedbackForm`; params?: Router.UnknownOutputParams; } | { pathname: `/components/LittleLemonFooter`; params?: Router.UnknownOutputParams; } | { pathname: `/components/LittleLemonHeader`; params?: Router.UnknownOutputParams; } | { pathname: `/components/LoginScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/components/MenuItems`; params?: Router.UnknownOutputParams; } | { pathname: `/components/SettingsScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/components/WelcomeScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/components/useUpdate`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/components/CustomerScreen${`?${string}` | `#${string}` | ''}` | `/components/FeedbackForm${`?${string}` | `#${string}` | ''}` | `/components/LittleLemonFooter${`?${string}` | `#${string}` | ''}` | `/components/LittleLemonHeader${`?${string}` | `#${string}` | ''}` | `/components/LoginScreen${`?${string}` | `#${string}` | ''}` | `/components/MenuItems${`?${string}` | `#${string}` | ''}` | `/components/SettingsScreen${`?${string}` | `#${string}` | ''}` | `/components/WelcomeScreen${`?${string}` | `#${string}` | ''}` | `/components/useUpdate${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/components/CustomerScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/FeedbackForm`; params?: Router.UnknownInputParams; } | { pathname: `/components/LittleLemonFooter`; params?: Router.UnknownInputParams; } | { pathname: `/components/LittleLemonHeader`; params?: Router.UnknownInputParams; } | { pathname: `/components/LoginScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/MenuItems`; params?: Router.UnknownInputParams; } | { pathname: `/components/SettingsScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/WelcomeScreen`; params?: Router.UnknownInputParams; } | { pathname: `/components/useUpdate`; params?: Router.UnknownInputParams; };
    }
  }
}
