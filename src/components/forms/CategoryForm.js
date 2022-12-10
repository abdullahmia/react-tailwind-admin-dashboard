import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// rich text editor module
const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]


const CategoryForm = () => {
    const [value, setValue] = useState('');
  return (
      <div className="grid lg:grid-cols-12 gap-8">
          <div className="col-span-8">
              <div className="space-y-5 w-full bg-white shadow rounded p-5">
                  <h2 className="text-lg text-gray-900">Basic information</h2>

                  {/* forms elements */}
                  <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">Name</label>
                      <input type="text" className="w-full rounded border p-2 text-sm focus:outline-none" />

                  </div>

                  <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">Slug</label>
                      <div className="border flex items-center rounded">
                          <div className="p-2 bg-gray-100">
                              https://example.site/product/
                          </div>
                          <input type="text" className="flex-1 p-2 text-sm focus:outline-none" />
                      </div>
                      <p className="text-gray-600 text-sm">Unique human-readable product identifier. No longer than 255 characters.</p>
                  </div>


                  <div style={{ height: '350px' }}>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">Description</label>
                      <ReactQuill style={{ height: '280px' }} theme="snow" modules={modules}
                          formats={formats} value={value} onChange={setValue} />
                  </div>

                  <div>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">Short Description</label>
                      <textarea row={2} type="text" className="w-full rounded border p-2 text-sm focus:outline-none" />

                  </div>
              </div>
              <div className="mt-7 space-y-5 w-full bg-white shadow rounded p-5">
                  <h2 className="text-lg text-gray-900">Pricing</h2>

                  {/* forms elements */}
                  <div className='w-full flex gap-4 items-center'>
                      <div className='w-full'>
                          <label className="block mb-2 text-sm font-semibold text-gray-90">Price</label>
                          <input type="text" className="w-full rounded border p-2 text-sm focus:outline-none" />

                      </div>
                      <div className='w-full'>
                          <label className="block mb-2 text-sm font-semibold text-gray-90">Old price</label>
                          <input type="text" className="w-full rounded border p-2 text-sm focus:outline-none" />

                      </div>
                  </div>
              </div>

              <div className="mt-7 space-y-5 w-full bg-white shadow rounded p-5">
                  <h2 className="text-lg text-gray-900">Inventory</h2>

                  {/* forms elements */}
                  <div className='w-full'>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">SKU</label>
                      <input type="text" className="w-full rounded border p-2 text-sm focus:outline-none" />

                  </div>
                  <div className="flex items-center mb-4">
                      <input id="stock" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                      <label for="stock" className="ml-2 text-sm font-medium text-gray-900">Enable stock management</label>
                  </div>
                  <div className='w-full'>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">Stock quantity</label>
                      <input type="number" className="w-full rounded border p-2 text-sm focus:outline-none" />

                  </div>
              </div>

              <div className="mt-7 space-y-5 w-full bg-white shadow rounded p-5">
                  <h2 className="text-lg text-gray-900">Search engine optimization</h2>
                  <p className='text-gray-600 text-sm'>Provide information that will help improve the snippet and bring your product to the top of search engines.</p>

                  {/* forms elements */}
                  <div className='w-full'>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">Page title</label>
                      <input type="text" className="w-full rounded border p-2 text-sm focus:outline-none" />

                  </div>

                  <div className='w-full'>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">Meta description</label>
                      <input type="text" className="w-full rounded border p-2 text-sm focus:outline-none" />

                  </div>
              </div>
          </div>
          <div className="col-span-4">
              <div className="space-y-5 w-full bg-white shadow rounded p-5">
                  <h2 className="text-lg text-gray-900">Visibility</h2>

                  {/* forms elements */}
                  <div className='space-y-1'>
                      <div className="flex items-center">
                          <input checked id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0" />
                          <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900">Published</label>
                      </div>
                      <div className="flex items-center">
                          <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0" />
                          <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900">Scheduled</label>
                      </div>
                      <div className="flex items-center">
                          <input checked id="default-radio-3" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0" />
                          <label for="default-radio-3" className="ml-2 text-sm font-medium text-gray-900">Hidden</label>
                      </div>


                  </div>

                  <div className='w-full'>
                      <label className="block mb-2 text-sm font-semibold text-gray-90">Publish date</label>
                      <input type="date" className="w-full rounded border p-2 text-sm focus:outline-none" />
                  </div>
              </div>
              <div className="mt-5 space-y-5 w-full bg-white shadow rounded p-5">
                  <h2 className="text-lg text-gray-900">Categories</h2>

                  {/* forms elements */}
                  <select className="w-full rounded border p-2 text-sm focus:outline-none">
                      <option value="cloth">Cloth</option>
                      <option value="tech">Tech</option>
                  </select>

              </div>



          </div>
      </div>
  )
}

export default CategoryForm;