import { useRef, useState } from 'react';
import { BiX } from 'react-icons/bi';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

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

const NewCategory = () => {
    const [value, setValue] = useState('');
    const [image, setImage] = useState('');
    const filePickerRef = useRef(null);

    // add photo image tag
    const addPhotoToTag = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    return (
        <Layout title="New Category">
            <div className="flex items-center justify-between py-3">
                <div>
                    <p className="text-gray-600">
                        <Link to='/'>Dashbaord</Link>
                        <span> / </span>
                        <Link to='/product'>Category</Link>
                        <span> / </span>
                        <span>New</span>
                    </p>
                    <h2 className="text-3xl">New Category</h2>
                </div>
                <div>
                    <Link to='/category/new' className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded text-sm px-5 py-2.5 text-center items-center mr-3">Save</Link>
                </div>
            </div>

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
                                    https://example.site/category/
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
                        <h2 className="text-lg text-gray-900">Parrent categories</h2>

                        {/* forms elements */}
                        <select className="w-full rounded border p-2 text-sm focus:outline-none">
                            <option value="cloth">Cloth</option>
                            <option value="tech">Tech</option>
                        </select>
                    </div>

                    <div className="mt-5 space-y-5 w-full bg-white shadow rounded p-5">
                        <h2 className="text-lg text-gray-900">Image</h2>

                        {
                            image && <div className="relative">
                                <div
                                    className="absolute bg-[#15181c] w-8 h-8 hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                                    onClick={() => setImage(null)}
                                >
                                    <BiX className="text-white h-5" />
                                </div>
                                <img
                                    src={URL.createObjectURL(image)}
                                    className='w-full h-72 object-cover'
                                    alt=""
                                />
                            </div>
                        }

                        {
                            !image && <div className="w-full h-full flex items-center justify-center py-7">
                                <div className="flex flex-col gap-3 justify-center items-center">
                                    <svg
                                        aria-label="Icon to represent media such as images or videos"
                                        className="dark:text-gray-400"
                                        color="#262626"
                                        fill="#262626"
                                        height="77"
                                        role="img"
                                        viewBox="0 0 97.6 77.3"
                                        width="96"
                                    >
                                        <path
                                            d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>

                                    <input
                                        type="file"
                                        hidden
                                        onChange={addPhotoToTag}
                                        ref={filePickerRef}
                                    />
                                    <button
                                        className="underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            filePickerRef.current.click();
                                        }}
                                    >
                                        Select from computer
                                    </button>
                                </div>
                            </div>
                        }

                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default NewCategory