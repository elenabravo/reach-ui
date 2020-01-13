import React from "react";
import PropTypes from "prop-types";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import { useStaticQuery, graphql } from "gatsby";
import Header from "$components/Header";
import Footer from "$components/Footer";
import SearchField from "$components/SearchField";
import AutoLinks from "$components/AutoLinks";
import MainNav from "$components/MainNav";
import TopNav from "$components/TopNav";

import "@reach/dialog/styles.css";
import "@reach/skip-nav/styles.css";
import "@reach/menu-button/styles.css";
import "@reach/slider/styles.css";
import "@reach/tabs/styles.css";
import "@reach/tooltip/styles.css";
import "@reach/combobox/styles.css";
import "$styles/app.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="Layout">
      <SkipNavLink style={{ zIndex: 2 }} />
      <Header
        className="Layout__Header"
        siteTitle={data.site.siteMetadata.title}
      >
        <div className="Layout__TopNav-wrapper">
          <TopNav className="Layout__TopNav" />
        </div>
        <div className="Layout__SearchField-wrapper">
          <SearchField className="Layout__SearchField" />
        </div>
      </Header>

      <div className="Layout__main-outer">
        <div className="Layout__main-inner">
          <aside className="Layout__side-left">
            <MainNav className="Layout__MainNav" />
          </aside>

          <div className="Layout__content">
            <main className="Layout__content-inner">
              <SkipNavContent />
              {children}
            </main>
            {/* this may or may not exist on a given page */}
            <aside className="Layout__side-right">
              <AutoLinks className="Layout__AutoLinks" />
            </aside>
          </div>
        </div>
        <Footer className="Layout__Footer" />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;