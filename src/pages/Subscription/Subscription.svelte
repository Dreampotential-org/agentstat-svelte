<script>
    import { isAuthenticated } from "../../lib/api/auth";
  let is_authenticated = isAuthenticated();
  function startFreeTrial() {
        console.log("Start free trial button clicked");
        if (is_authenticated) {
            console.log("User is authenticated, redirecting to home page");
            window.location.href = "/home"; // Change this to the actual home page URL
        } else {
            console.log("User is not authenticated, redirecting to login page");
            window.location.href = "/login"; // Change this to the actual login page URL
        }
    }
  import { FooterDashboard, NavBar } from "../../components";
  let showParagraph1 = false;
  let showParagraph2 = false;
  let showParagraph3 = false;
  let showParagraph4 = false;
  let showParagraph5 = false;
  let showParagraph6 = false;
  let showParagraph7 = false;

function handleClick1() {
     showParagraph1 = !showParagraph1;
}
  function handleClick2() {
    showParagraph2 = !showParagraph2;
  }
  function handleClick3() {
    showParagraph3 = !showParagraph3;
  }
  function handleClick4() {
    showParagraph4 = !showParagraph4;
  }
  function handleClick5() {
    showParagraph5 = !showParagraph5;
  }
  function handleClick6() {
    showParagraph6 = !showParagraph6;
  }
  function handleClick7() {
    showParagraph7 = !showParagraph7;
  }
  $: divStyle1 = `height: ${showParagraph1 ? '180px' : '80px'};  flex-direction: ${showParagraph1 ? "column" : "rows"}; align-items: ${showParagraph1 ? "start" : "center"};  justify-content: ${showParagraph1 ? "left" : "left"};  padding-top:${showParagraph1 ? "15px" : "0px"} `
  $: divStyle2 = `height: ${showParagraph2 ? '240px' : '80px'};  flex-direction: ${showParagraph2 ? "column" : "rows"}; align-items: ${showParagraph2 ? "start" : "center"};  justify-content: ${showParagraph2 ? "left" : "left"};  padding-top:${showParagraph2 ? "15px" : "0px"} `
  $: divStyle3 = `height: ${showParagraph3 ? '150px' : '80px'};  flex-direction: ${showParagraph3 ? "column" : "rows"}; align-items: ${showParagraph3 ? "start" : "center"};  justify-content: ${showParagraph3 ? "left" : "left"};  padding-top:${showParagraph3 ? "15px" : "0px"} `
  $: divStyle4 = `height: ${showParagraph4 ? '150px' : '80px'};  flex-direction: ${showParagraph4 ? "column" : "rows"}; align-items: ${showParagraph4 ? "start" : "center"};  justify-content: ${showParagraph4 ? "left" : "left"};  padding-top:${showParagraph4 ? "15px" : "0px"} `
  $: divStyle5 = `height: ${showParagraph5 ? '150px' : '80px'};  flex-direction: ${showParagraph5 ? "column" : "rows"}; align-items: ${showParagraph5 ? "start" : "center"};  justify-content: ${showParagraph5 ? "left" : "left"};  padding-top:${showParagraph5 ? "15px" : "0px"} `
  $: divStyle6 = `height: ${showParagraph6 ? '150px' : '80px'};  flex-direction: ${showParagraph6 ? "column" : "rows"}; align-items: ${showParagraph6 ? "start" : "center"};  justify-content: ${showParagraph6 ? "left" : "left"};  padding-top:${showParagraph6 ? "15px" : "0px"} `
  $: divStyle7 = `height: ${showParagraph7 ? '150px' : '80px'};  flex-direction: ${showParagraph7 ? "column" : "rows"}; align-items: ${showParagraph7 ? "start" : "center"};  justify-content: ${showParagraph7 ? "left" : "left"};  padding-top:${showParagraph7 ? "15px" : "0px"} `
  
</script>

<NavBar flat />
<div class="headContainer">
  <h1>AgentStat Premium </h1>
  <p>Enable marketing channels notitying facebook, 
    linkedin or email network of deals you closed and new listings
  </p>
  
  <p>
    Our top scoring AI generated emails, sales scripts, listing descriptions
  </p>
  <button>Continue</button>
</div> 



  <div class="mainContainerContainer1">
    <div class="container1">
      <div class="miniContainer1">
        <h1>Leads you generate on your profile are 100% yours to keep</h1>
        <p>
          Use AgentStat to win listings presentation. Your AgentStat profile page shows your achievements and can highlight yourself.
        </p>
        <p>AgentStat shows you stats and other analytics such as how manytimes your profile has been viewed or clicked on.
        </p>
        <p>AgentStat Referral system allows you to send referrals with esignature system.
        </p>
        <p></p>
        <button on:click={startFreeTrial}>Start free trial</button>
      </div>
      <div class="miniContainer2">
        <img alt="img1" src="/images/image2OfSub.png"> 
      </div>
    </div>
  </div>
  
  <div class="mainContainerContainer1">
    <div class="container1">
      <div class="miniContainer1">
        <h1>Expert-level emails and scripts</h1>
        <p>
          AgentStat crafts expert level email and sales scripts trained on
          communications from top producing agents, so you always have the right
          words to say.
        </p>
        <button on:click={startFreeTrial}>Start free trial</button>
      </div>
      <div class="miniContainer2">
        <img alt="img1" src="/images/image1OfSub.png"> 
      </div>
    </div>
  </div>


  <div class="mainContainerContainer1">
    <div class="container1">
      <div class="miniContainer1">
        <h1>Expert-level emails and scripts</h1>
        <p>
          AgentStat crafts expert level email and sales scripts trained on
          communications from top producing agents, so you always have the right
          words to say.
        </p>
        <button on:click={startFreeTrial}>Start free trial</button>
      </div>
      <div class="miniContainer2">
        <img alt="img1" src="/images/image3OfSub.png"> 
      </div>
    </div>
  </div>


<div class="mainContainerContainer2">
  <div class="Container2">
    <h1>One price. All the tools.</h1>
    <p>
      Whether you're drafting an email for a client, reimagining a room, or
      creating a captivating listing description -- there's a tool for you. 
      AgentStat subscribers get unlimited access to all of our AI tools.
    </p>
  </div>
</div>


<div class="container3">
  <div class="item1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="email feather feather-mail"
      ><path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      /><polyline points="22,6 12,13 2,6" /></svg
    >
    <h3>Email Genertaion</h3>
    <p>
      Craft engaging emails to build strong connections with customers and guide
      them to take action.
    </p>
    <a href="/Ai">View tools ⟶</a>
  </div>
  <div class="item2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="remodel feather feather-image"
      ><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle
        cx="8.5"
        cy="8.5"
        r="1.5"
      /><polyline points="21 15 16 10 5 21" /></svg
    >
    <h3>Room Remodels</h3>
    <p>
      Help your buyer fall in love with a room by generating instant AI
      remodels.
    </p>
    <a href="/Ai">View tools ⟶</a>
  </div>
  <div class="item3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="social feather feather-thumbs-up"
      ><path
        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
      /></svg
    >
    <h3>Social Media</h3>
    <p>
      Build your online presence with specialized social media posts for every
      network.
    </p>
    <a href="/Ai">View tools ⟶</a>
  </div>
  <div class="item4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="phone feather feather-phone"
      ><path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      /></svg
    >
    <h3>Phone Scripts</h3>
    <p>Always find the right words to say when speaking to clients.</p>
    <a href="/Ai">View tools ⟶</a>
  </div>
  <div class="item5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="web feather feather-layout"
      ><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line
        x1="3"
        y1="9"
        x2="21"
        y2="9"
      /><line x1="9" y1="21" x2="9" y2="9" /></svg
    >
    <h3>Website Content</h3>
    <p>
      Enhance your online presence with persuasive content for the web, from
      detailed listings to insightful blogs and professional bios.
    </p>
    <a href="/Ai">View tools ⟶</a>
  </div>
</div>

<div class="container4">
  <h2>Frequently Asked Questions</h2>
  <div class="container4Item1" id="C4I1" style={divStyle1} on:click={handleClick1}>
    <p>What is AgentStat?</p>
    {#if showParagraph1}
    <h5>AgentStat is a database of every realestate transaction that you can use to pick a real estate agent based on their stats. m made for real estate agents</h5>
    {/if}
  </div>
  <div class="container4Item2" id="C4I2" style={divStyle2} on:click={handleClick2}>
    <p>How is AgentStat Plus different from other AI tools like ChatGPT?</p>
      {#if showParagraph2}
      <h5>AgentStat Plus offers a multifaceted advantage. While many AI tools produce generic content, AgentStat stands out by incorporating live listing data and real-time neighborhood market insights where needed. It's trained on materials from top-producing agents to produce content that not only resonates but also aids in closing deals. Additionally, AgentStat's AI outputs are customized based on the user's professional profile and client notes, ensuring that every output is distinct and meaningful.</h5>
    {/if}
  </div>
  <div class="container4Item3" id="C4I3" style={divStyle3} on:click={handleClick3}>
    <p>How does AgentStat make content that's right for me?</p>
      {#if showParagraph3}
      <h5>AgentStat uses the agent's professional profile, client notes, and a deep understanding of top-producing agent materials to ensure each content piece is tailored to the specific needs and style of the agent.</h5>
    {/if}
  </div>
  <div class="container4Item4" id="C4I4" style={divStyle4} on:click={handleClick4}>
    <p>How much does AgentStat Plus cost, and can I try it first?</p>
      {#if showParagraph4}
      <h5>AgentStat plus is priced at $9.99 per month.</h5>
    {/if}
  </div>
  <div class="container4Item5" id="C4I5" style={divStyle5} on:click={handleClick5}>
    <p>
      Am I locked into a long-term contract with AgentStat  or can I cancel
      anytime?
    </p>
      {#if showParagraph5}
      <h5>You're not locked into any long-term commitment with AgentStat. You can cancel anytime directly from your dashboard.</h5>
    {/if}
  </div>
  <div class="container4Item6" id="C4I6" style={divStyle6} on:click={handleClick6}>
    <p>Can I save the content generated by AgentStat for future use?</p>
      {#if showParagraph6}
      <h5>Absolutely! AgentStat Plus allows you to save any output generated by the AI, so you can use it at your convenience without the need for regeneration.</h5>
    {/if}
  </div>
  <div class="container4Item7" id="C4I7" style={divStyle7} on:click={handleClick7}>
    <p>Is my data safe with AgentStat?</p>
      {#if showParagraph7}
      <h5>Yes, keeping your data safe is very important to us. All user inputs are securely transmitted and we do not share or sell your data to third parties.</h5>
    {/if}
  </div>
</div>
<div class="mainContainerNum5Main">

<div class="containerNum5">
  <div class="mini1ContainerNum5">
    <div class="smalldiv1">
      <h1>Simple pricing</h1>
    <p>
      Get started with AgentStat's full suite of AI tools for real estate agents
      today. Cancel anytime.
    </p>
    </div>
  </div>
  <div class="mini2ContainerNum5">
   <div class="smalldiv2">
    <h1>$9.99/mo</h1>
    <p>Access to all tools</p>
    <p>Unlimited usage</p>
    <button>Sign Up</button>
   </div>
  </div>
</div>
</div>
<FooterDashboard />

<style src="./Subscription.scss"></style>
