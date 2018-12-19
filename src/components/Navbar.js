import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import DrawerMenu from './ui/DrawerMenu'

const Navbar = (props) => {
  
  return (
    <StaticQuery
      query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
      render={data => (
        <nav className="nav nav__main">
          {!!props.menuStyle && props.menuStyle === `drawer` ?
            <div></div>
            :
            <div className="nav__inner">
              {data.allWordpressPage.edges.map(edge => (
                <Link
                  className="navbar-item"
                  to={edge.node.slug}
                  key={edge.node.slug}
                >
                  {edge.node.title}
                </Link>
              ))}
            </div>
          }
        </nav>
      )}
    />
  );
};

export default Navbar;