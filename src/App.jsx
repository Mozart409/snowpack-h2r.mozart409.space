import { useState, useRef } from 'react';
import React from 'react';
import Layout from './components/layout';

function Home() {
  const [Input, setInput] = useState();
  const [Output, setOutput] = useState();
  const OutpurAreaRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    /*     toast.success('Converted') */
    try {
      var replace1 = Input.replace(/fill-rule\b/gi, 'fillRule');
      var replace2 = replace1.replace(/clip-rule\b/gi, 'clipRule');
      var replace3 = replace2.replace(/stroke-width\b/gi, 'strokeWidth');
      var replace4 = replace3.replace(/class\b/gi, 'className');
      var replace5 = replace4.replace(/stroke-linecap\b/gi, 'strokeLinecap');
      var replace6 = replace5.replace(/stroke-linejoin\b/gi, 'strokeLinejoin');
      var replace7 = replace6.replace(/<!--/gi, '{/* <!--');
      var replace8 = replace7.replace(/-->/gi, '--> */}');

      return setOutput(replace8);
    } catch (error) {
      /*  toast.error(error) */
    }
  };

  const copy2Clipboard = (e) => {
    try {
      OutpurAreaRef.current.select();
      document.execCommand('copy');
      e.target.focus();
      /*     toast.success('Copied') */
    } catch (error) {
      /*   toast.error(error) */
    }
  };

  const onReset = () => {
    setOutput('');
    setInput('');
    /*  toast.info('Reset all inputs') */
  };

  return (
    <Layout>
      <h1 className="mb-1 text-2xl font-bold text-gray-900 leading-7 sm:text-3xl sm:leading-9 sm:truncate">
        HTML 2 REACT
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <form onSubmit={onSubmit}>
          <div className="mx-auto overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-1 border-b border-gray-200 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900 leading-7 sm:text-3xl sm:leading-9 sm:truncate">
                Input
              </h2>
            </div>
            <div className="max-w-full px-4 sm:p-6">
              <label className="block">
                <textarea
                  id="Input-TextArea"
                  onChange={(e) => setInput(e.target.value)}
                  className="block w-full mt-1 form-textarea"
                  rows="25"
                  placeholder="Enter some content."
                  value={Input}
                ></textarea>
              </label>
            </div>
            <div className="px-4 py-1 border-t border-gray-200 sm:px-6">
              <span className="relative z-0 flex justify-center shadow-sm">
                <button
                  onClick={onReset}
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300  active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  <span className="w-8 h-8 text-gray-600">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </span>
                  Reset
                </button>
                <button
                  type="submit"
                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300  active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  <span className="w-8 h-8 text-gray-600">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                    </svg>
                  </span>
                  Convert
                </button>
              </span>
            </div>
          </div>
        </form>
        <div>
          <div className="mx-auto overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-1 border-b border-gray-200 sm:px-6">
              <h2 className="text-2xl font-bold text-gray-900 leading-7 sm:text-3xl sm:leading-9 sm:truncate">
                Output
              </h2>
            </div>
            <div className="max-w-full px-4 sm:p-6">
              <label className="block">
                <textarea
                  id="Output-TextArea"
                  className="block w-full mt-1 form-textarea"
                  rows="25"
                  placeholder="..."
                  ref={OutpurAreaRef}
                  value={Output}
                ></textarea>
              </label>
            </div>
            <div className="px-4 py-1 border-t border-gray-200 sm:px-6">
              <span className="relative z-0 flex justify-center shadow-sm">
                <button
                  onClick={copy2Clipboard}
                  className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300  active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                >
                  <span className="w-8 h-8 text-gray-600">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                    </svg>
                  </span>
                  Copy
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
