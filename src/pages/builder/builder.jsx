import React from 'react';
import { Outlet } from 'react-router-dom';
import { SectionsBar } from 'components/layout';

function Builder() {
  return (
    <div className="flex h-screen">
      <SectionsBar />
      <Outlet />
    </div>
    // {/* <BuilderPathValidator> */}
    // {/*  //{' '} */}
    // {/*  <div className="flex h-screen"> */}
    // {/*    // <SectionsBar /> */}
    // {/*    // /!* show if list of your  *!/ */}
    // {/*    // {section && <SetupsBar />} */}
    // {/*    // {section ? <SetupRedactor /> : <BuilderDoc />} */}
    // {/*    //{' '} */}
    // {/*  </div> */}
    // {/*  //{' '} */}
    // {/* </BuilderPathValidator> */}
  );
}

export default Builder;
