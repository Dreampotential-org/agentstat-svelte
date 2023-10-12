<script>
  import { onMount } from "svelte";
  import page from "page";
  import {
    Home,
    AboutUs,
    Agents,
    Profile,
    Login,
    VerifyEmail,
    ProfileSettings,
    ConnectProfile,
    Inbox,
    Reports,
    Marketing,
    PastSales,
    Referrals,
    Team,
    AI,
    Subscription,
    Website,
    Email,
    Script,
    SocialFacebook,
    SocialInstagram,
    SocialLinkdin,
    Photo,
    SMS,
    Social,
    Checkout,
    checkout_payment,
  } from "./pages";
  import { Notification, Modal } from "./components";
  import { notif } from "./stores/notif";
  import AllHomes from "./pages/AllHomes/AllHomes.svelte";
  import State from "./pages/State/State.svelte";
  import { isAuthenticated, currentUser } from "./lib/api/auth";
  import { setReferral } from "./lib/api/referral";

  page.start();
  page("*", (c, next) => {
    scrollTo(0, 0);
    next();
  });

  let active = Home;
  let props = {};

  setReferral();

  page("/checkout", (ctx) => {
    active = Checkout;
    props = {};
  });

  page("/", (ctx) => {
    active = Home;
    props = {};
  });

  page("/allhomes", (ctx) => {
    active = AllHomes;
    props = {};
  });

  page("/state/:stateName", (ctx) => {
    active = State;
    props = ctx.params;
  });

  page("/checkout/payment", (ctx) => {
    active = checkout_payment;
    props = {};
  });

  page("/about-us", (ctx) => {
    active = AboutUs;
    props = {};
  });
  page("/Ai", (ctx) => {
    active = AI;
    props = {};
  });
  page("/Subscription", (ctx) => {
    active = Subscription;
    props = {};
  });
  page("/Website", (ctx) => {
    active = Website;
    props = {};
  });
  page("/Email", (ctx) => {
    active = Email;
    props = {};
  });
  page("/Script", (ctx) => {
    active = Script;
    props = {};
  });
  page("/SocialFacebook", (ctx) => {
    active = SocialFacebook;
    props = {};
  });
  page("/SocialInstagram", (ctx) => {
    active = SocialInstagram;
    props = {};
  });
  page("/SocialLinkdin", (ctx) => {
    active = SocialLinkdin;
    props = {};
  });
  page("/Photo", (ctx) => {
    active = Photo;
    props = {};
  });
  page("/SMS", (ctx) => {
    active = SMS;
    props = {};
  });
  page("/Social", (ctx) => {
    active = Social;
    props = {};
  });
  /*page("/reset-password", ctx => {
    active = PasswordReset;
    props = {};
  });

  page("/reset-password/:id/:token", ctx => {
    active = PasswordReset;
    props = ctx.params;
  });

  page("/reset-password/:id", ctx => {
    active = PasswordResetConfirm;
    props = ctx.params;
  });*/

  page("/agents", (ctx) => {
    console.log(location.href);
    active = Agents;
    props = {};
  });

  page("/login", (ctx) => {
    if (isAuthenticated()) {
      page.redirect("/profile-settings");
      return;
    }
    active = Login;
  });
  page("/profile/:name", (ctx) => {
    active = Profile;
    props = ctx.params;
  });
  page("/profile/:name/:custom", (ctx) => {
    active = Profile;
    props = ctx.params;
  });

  page("/verify-email/:key", (ctx) => {
    active = VerifyEmail;
    props = ctx.params;
  });

  // Dashboard
  page("/profile-settings", (ctx) => {
    if (!isAuthenticated()) {
      page.redirect("/login");
      return;
    }
    if (!currentUser().agent_id) {
      page.redirect("/connect-profile");
      return;
    }
    active = ProfileSettings;
    props = {};
  });

  page("/connect-profile", (ctx) => {
    if (!isAuthenticated()) {
      page.redirect("/login");
      return;
    }
    if (currentUser().agent_id) {
      page.redirect("/profile-settings");
      return;
    }
    active = ConnectProfile;
    props = {};
  });

  page("/inbox", (ctx) => {
    if (!isAuthenticated()) {
      page.redirect("/login");
      return;
    }
    if (!currentUser().agent_id) {
      page.redirect("/connect-profile");
      return;
    }
    active = Inbox;
    props = { segment: "inbox" };
  });

  page("/reports", (ctx) => {
    if (!isAuthenticated()) {
      page.redirect("/login");
      return;
    }
    if (!currentUser().agent_id) {
      page.redirect("/connect-profile");
      return;
    }
    active = Reports;
    props = { segment: "reports" };
  });

  page("/marketing", (ctx) => {
    if (!isAuthenticated()) {
      page.redirect("/login");
      return;
    }
    if (!currentUser().agent_id) {
      page.redirect("/connect-profile");
      return;
    }
    active = Marketing;
    props = { segment: "marketing" };
  });

  page("/past-sales", (ctx) => {
    if (!isAuthenticated()) {
      page.redirect("/login");
      return;
    }
    if (!currentUser().agent_id) {
      page.redirect("/connect-profile");
      return;
    }
    active = PastSales;
    props = { segment: "past-sales" };
  });

  page("/referrals", (ctx) => {
    if (!isAuthenticated()) {
      page.redirect("/login");
      return;
    }
    if (!currentUser().agent_id) {
      page.redirect("/connect-profile");
      return;
    }
    active = Referrals;
    props = { segment: "referrals" };
  });

  page("/team", (ctx) => {
    if (!isAuthenticated()) {
      page.redirect("/login");
      return;
    }
    if (!currentUser().agent_id) {
      page.redirect("/connect-profile");
      return;
    }
    active = Team;
    props = { segment: "team" };
  });

  page("*", () => page.redirect("/"));

  onMount(() => {
    if (!location.pathname.startsWith("/agents")) {
      page.replace(location.pathname);
    } else {
      active = Agents;
    }
  });
</script>

<Notification show={$notif.show} msg={$notif.msg} error={$notif.error} />
<Modal />
<main>
  <svelte:component this={active} {...props} />
</main>
