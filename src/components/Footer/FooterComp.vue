<script setup>
import InputFooter from '../input/texto/InputFooter.vue';
</script>
<template>
  <section class="subscription-section">
    <div class="subscription-wrapper">
      <div class="subscription__description">
        <h2 class="description__text">Join 10k+ other readers!</h2>
        <p class="description__text">Stay up to date with our news and articles</p>
      </div>
      <form class="subscribe-form">
        <InputFooter />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </section>
  <footer>
    <div class="footer-wrapper">
      <div class="social-wrapper">
        <div class="social-links">
          <ul>
            <li class="social-linkss">
              <a href="#" title="Instagram">
                <img src="../../assets/instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" title="Linkedin">
                <img src="../../assets/linkedin.svg" alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <img src="../../assets/twitter.svg" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#" title="Youtube">
                <img src="../../assets/youtube.svg" alt="YouTube" />
              </a>
            </li>
            <li>
              <a href="#" title="GitHub">
                <img src="../../assets/github.svg" alt="GitHub" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-columns">
        <div class="footer-links">
          <div class="footer-logo">
            <img src="../../assets/logo.svg" alt="Atheros Logo" />
          </div>
          <section>
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#" title="API">API</a>
              </li>
              <li>
                <a href="#" title="Pricing">Pricing</a>
              </li>
              <li>
                <a href="#" title="Documentation">Documentation</a>
              </li>
              <li>
                <a href="#" title="Release Notes">Release Notes</a>
              </li>
              <li>
                <a href="#" title="Status">Status</a>
              </li>
            </ul>
          </section>
          <section>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#" title="Support">Support</a>
              </li>
              <li>
                <a href="#" title="Sitemap">Sitemap</a>
              </li>
              <li>
                <a href="#" title="Newsletter">Newsletter</a>
              </li>
              <li>
                <a href="#" title="Help Centre">Help Centre</a>
              </li>
              <li>
                <a href="#" title="Investor">Investor</a>
              </li>
            </ul>
          </section>
          <section>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#" title="About Us">About Us</a>
              </li>
              <li>
                <a href="#" title="Blog">Blog</a>
              </li>
              <li>
                <a href="#" title="Careers">Careers</a>
              </li>
              <li>
                <a href="#" title="Press">Press</a>
              </li>
              <li>
                <a href="#" title="Contact">Contact</a>
              </li>
            </ul>
          </section>
          <section>
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#" title="Terms and services"> Terms </a>
              </li>
              <li>
                <a href="#" title="Privacy Policy"> Privacy </a>
              </li>
              <li>
                <a href="#" title="Cookies"> Cookies </a>
              </li>
              <li>
                <a href="#" title="Licenses"> Licenses </a>
              </li>
              <li>
                <a href="#" title="Cookies"> Contact </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-description">
          <h3 class="footer-headline">Elevate your tech skills</h3>
          <p class="footer-headline">Develop and design platforms with ease</p>
        </div>
        <small class="footer-headline">© Atheros Intelligence Ltd. <span id="year"></span>, All rights reserved</small>
      </div>
    </div>
  </footer>
</template>
<style scoped>
/*? footer reset */
*, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.description__text{
    color: var(--text-color-dk) ;
}
.subscription-section {
    margin: 0 auto;
    margin-top: auto;
    padding: 48px 16px;
    max-width: 1024px;
    width: 100%;
}

/*? subscribe section */
.subscription-wrapper {
    margin: 0 auto;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    min-height: 180px;
    gap: 32px;
    background-color: var(--primary-color-lg);
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    justify-content: space-between;
}

.subscription__description {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1;
}

.subscribe-form {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    flex-grow: 1;
}

.subscribe-form > input {
    border: 1px solid var(
        --text-color-dk);
    color: var(--text-color-dk);
    outline: none;
    min-height: 48px;
    background-color: var(
        --white);
    font-size: 1.2rem;
    flex-grow: 3;
    padding: 8px 12px;
    border-radius: 8px;
}

.subscribe-form > input:focus {
    border: 1px solid var(
        --primary-color-dk);
}

.subscribe-form > 
input::placeholder {
    color: var(--text-color-dk);
}

.subscribe-form > button {
    cursor: pointer;
    background-color: var(
        --text-color-dk);
    border-radius: 8px;
    font-size: 1.25rem;
    min-height: 48px;
    flex-grow: 1;
    white-space: nowrap;
    padding: 8px 12px;
    border: 0px;
    outline: none;
    border: 1px solid var(
        --text-color-dk);
}

/*? footer containers */
footer {
    bottom: 0px;
    background-color: var(
        --bg-dark);
    width: 100%;
    min-width: 300px;
    bottom: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.footer-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    width: 100%;
    padding: 16px;
}

.footer-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 4;
    gap: 48px 16px;
}

.footer-columns {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 8px 36px 8px;
}

.footer-columns section, 
.footer-columns .footer-logo {
    display: flex;
    flex-direction: column;
    flex: 1 0 160px;
    max-width: 160px;
}
 
.footer-columns ul {
    display: flex;
    gap: 12px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    flex-direction: column;
    font-weight: 600;
}

.footer-columns ul a {
    color: var(--text-color-dk);
    text-decoration: none;
    opacity: 60%;
}

.footer-columns ul a:hover{
    text-decoration: underline;
}

.footer-columns h3 {
    color: var(--text-color-dk);
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 1rem;
}

.footer-logo {
    display: flex;
    gap: 16px;
    flex-grow: 1;
    max-width: 160px;
    margin-bottom: 48px;
}

.footer-logo svg {
    stroke: var(--text-color-dk);
    stroke-width: 8px;
    width: 50px;
    height: 50px;
}

/*? Footer bottom */
.footer-bottom {
    margin-top: 48px;
    display: flex;
    align-items: end;
    width: 100%;
    gap: 16px;
    padding: 16px 0px;
    flex-wrap: wrap;
    justify-content: space-between;
    color: var(--text-color-dk);
    border-top: 1px solid var(
        --text-color-dk);
}

.footer-bottom > small {
    font-size: 16px;
    margin: 0 4px;
}

.footer-headline {
    margin: 0px;
    color: var(--text-color-dk);
}

.footer-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer-description h3 {
    margin-bottom: 8px;
}

/*? socials */

.social-wrapper {
    display: flex;
    width: 100%;
    gap: 8px;
    padding: 8px 0px;
    justify-content: end;
    margin-bottom: 16px;
    align-items: center;
    color: var(--text-color-dk);
}

.social-links {
    display: flex;
    gap: 8px;
    align-items: center;
}

.social-links img {
    width: 24px;
    height: 24px;
    transition: all 0.2s ease-in-out;
}

.social-links img:hover {
    transform: scale(1.1);
}

.social-links ul {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    list-style-type: none;
}

/*? mobile */

@media (min-width: 926px) {
    .footer-logo {
        margin-right: auto;
    }
}

@media (max-width: 800px) {
    .footer-top {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 16px 8px 32px 8px;
    }

    .footer-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        text-align: center;
    }

    .social-wrapper {
        justify-content: center;
    }
}

</style>