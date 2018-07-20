import React from 'react';

const Navigation = ({ signedIn, onSignOutClick }) => {
  return (
    <nav className="w-100 db dt-l pa4 ph5-l">
      <span className="db dtc-l v-mid mid-gray w-100 w-25-l tc tl-l f3 white">{'SMART BRAIN'}</span>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        {signedIn ? (
          <span className="f6 f5-l dib mr3 mr4-l underline dim pointer" onClick={onSignOutClick}>
            Sign Out
          </span>
        ) : null}
      </div>
    </nav>
  );
};

export default Navigation;
