import React from "react";

import PublishedBlog from '../blog/PublishedBlog';
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="">
        <div className="w-full mt-6">
          <ul
            className="flex mb-0 list-none flex-wrap -mt-1 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px last:mr-0  text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black border-b-4 border-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Profile
              </a>
            </li>
            <li className="-mb-px last:mr-0  text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black border-b-4 border-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>  Settings
              </a>
            </li>
            <li className="-mb-px last:mr-0  text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal " +
                  (openTab === 3
                    ? "text-black border-b-4 border-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i>  Options
              </a>
            </li>
          </ul>
          <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
            <div className="px-4 ">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                 <PublishedBlog/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <PublishedBlog/>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <PublishedBlog/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="indigo" />;
    </>
  );
}