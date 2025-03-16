import { useState } from "react"

export const TabChart = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (  
    <div>
      <h1>Skills</h1>
      <h2 className="eyebrow">Tools I love working with</h2>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
          <li className="me-2" role="presentation">
              <button onClick={() => handleTabClick("frontend")}className="inline-block p-4 border-b-2 rounded-t-lg" id="frontend-styled-tab" data-tabs-target="#frontend" type="button" role="tab" aria-controls="frontend" aria-selected="false">Frontend</button>
          </li>
          <li className="me-2" role="presentation">
              <button onClick={() => handleTabClick("backend")}className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="backend-styled-tab" data-tabs-target="#backend" type="button" role="tab" aria-controls="backend" aria-selected="false">Backend</button>
          </li>
          <li className="me-2" role="presentation">
              <button onClick={() => handleTabClick("other")}className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="other-styled-tab" data-tabs-target="#other" type="button" role="tab" aria-controls="other" aria-selected="false">Other</button>
          </li>
        </ul>
      </div>
      <div>
        {activeTab === "frontend" && <section className="frontend-tab-panel" role="tabpanel" id="frontend">
          <div className="tab-card md:flex md:flex-row">
            <div>
              <span>icon</span>
              <h1>React</h1>
              <p>React content</p>
            </div>
            <div>
              <span>icon</span>
              <h1>Php</h1>
              <p>Php content</p>
            </div>
            <div>
              <span>icon</span>
              <h1>Tailwind</h1>
              <p>tailwind css content</p>
            </div>
          </div>
        </section>}
        {activeTab === "backend" && <section className="backend-tab-panel" role="tabpanel" id="backend">
          <div className="tab-card md:flex md:flex-row">
            <div>
              <span>icon 2</span>
              <h1>React 2</h1>
              <p>React content 2</p>
            </div>
            <div>
              <span>icon 2</span>
              <h1>Php 2</h1>
              <p>Php content 2</p>
            </div>
            <div>
              <span>icon2</span>
              <h1>Tailwind 2</h1>
              <p>tailwind css content 2</p>
            </div>
          </div>
        </section>}
        {activeTab === "other" && <section className="other-tab-panel" role="tabpanel" id="other"  aria-labelledby="tab-1">
          <div className="tab-card md:flex md:flex-row">
            <div>
              <span>icon 3</span>
              <h1>React 3</h1>
              <p>React content 3</p>
            </div>
            <div>
              <span>icon 3</span>
              <h1>Php 3</h1>
              <p>Php content 3</p>
            </div>
            <div>
              <span>icon 3</span>
              <h1>Tailwind 3</h1>
              <p>tailwind css content 3</p>
            </div>
          </div>
        </section>}
      </div>
    </div>
  )
}