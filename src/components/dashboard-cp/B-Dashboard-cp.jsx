import React from "react";
import 'boxicons'
export default function Dashboard_cp() {

return (
    <div class="flex h-screen">
        <div class="w-1/5 bg-white shadow-lg p-4">
            <nav>
                <ul class="space-y-4">
                    <li><a href="#" class="text-blue-800 font-bold">products</a></li>
                    <li><a href="#" class="text-blue-700 font-bold">transactions</a></li>
                    <li><a href="#" class="text-blue-600 font-bold">orders</a></li>
                    <li><a href="#" class="text-blue-500 font-bold">users</a></li>
                    <li><a href="#" class="text-blue-400 font-bold">tracking</a></li>
                </ul>
            </nav>
        </div>

        
        <div class="w-4/5 p-6">
            <div class="bg-white shadow-lg rounded-lg p-6 mb-6">
                <h2 class="text-2xl font-bold mb-4">Add Products</h2>
                <form>
                <div class="grid grid-cols-2 gap-4">
                       <div>
               <label class="block text-gray-700">Name</label>
               <input type="text" class="w-full border rounded p-2"/>
                 </div>
                     <div>
                            <label class="block text-gray-700">Price</label>
                            <input type="text" class="w-full border rounded p-2"/>
                 </div>
                  <div>
                      <label class="block text-gray-700">Quantity</label>
                            <input type="text" class="w-full border rounded p-2"/>
                        </div>
                        <div>
                        <label class="block text-gray-700">Descriptions</label>
                         <textarea class="w-full border rounded p-2"></textarea>
                    </div>
                 </div>
                 <div class="mt-4">
                     <label class="block text-gray-700">Images</label>
                     <button class="bg-gray-300 text-gray-700 rounded px-4 py-2">Upload Img Button</button>
                </div>
            </form>
         </div>

            
            <div class="grid grid-cols-1 gap-4">
                <div class="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <div class="w-16 h-16 bg-gray-300 rounded"></div>
                        <div>
                            <p class="text-gray-700">test test test boxxxx</p>
                            <p class="text-gray-500">stocks:idk</p>
                            <p class="text-gray-500">price: 999,999,999B</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <input type="text" class="border rounded p-2"/>
                        <button class="bg-green-500 text-white rounded px-4 py-2">update</button>
                        <button class="bg-gray-300 text-gray-700 rounded px-4 py-2">edit</button>
                        <button class="bg-gray-300 text-gray-700 rounded px-4 py-2">delete</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
)}