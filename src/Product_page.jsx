import logo from '../src/assets/logo.png';
import homepagefirstcomp from './assets/homepagefirstcomp.png';
import group from './assets/Group.png';
import 'flowbite';
import Product_page_comp from './Product_page_comp';
function Product_page() {
    return (
        <>
            <div className='w-full flex flex-col my-6'>
                <div className='flex justify-center w-100'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className='w-full flex justify-evenly mt-10'>
                    <div className='w-2/5'>
                        <img src={homepagefirstcomp} className="w-full" alt="" />
                    </div>
                    <div className='w-2/5 pt-5 '>
                        <h1 className='text-2xl'>Product Name</h1>
                        <h1>Company Name</h1>
                        <h1 className='text-xl mt-5'>Rs. 0.00</h1>
                        <h1 className='text-sm'>Delivery Days</h1>
                        <div className='w-3/4 flex justify-around mt-5'>
                            <button className='px-8 py-1 rounded-lg' style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}>Wishlist</button>
                            <button className='px-8 py-1 rounded-lg' style={{ 'backgroundColor': 'rgba(255, 0, 122, 1)' }}>Cart</button>
                        </div>
                        <div className='mt-7'>
                            <h1 className='text-lg mb-2'>Product Details</h1>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, iure porro. Consectetur quas fuga nihil impedit velit, nesciunt odio provident ex enim soluta, animi nobis! Facilis est quidem laudantium ex quam asperiores magni dolorem inventore dicta esse! Quidem reiciendis officia similique, veniam aperiam, quia, facere autem ipsa consequatur expedita illo.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex px-10 my-6 flex-col'>
                    <div className='my-5'>
                        <h1 className='text-xl mb-3'>Product Use</h1>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic, labore facilis nihil provident maxime consequuntur dicta debitis natus quisquam, est, assumenda dolorem error repellat obcaecati ratione enim minus magni? Veniam ipsam ab ad explicabo sit voluptate enim sint. Nostrum!</p>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-xl mb-3'>Special Features</h1>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic, labore facilis nihil provident maxime consequuntur dicta debitis natus quisquam, est, assumenda dolorem error repellat obcaecati ratione enim minus magni? Veniam ipsam ab ad explicabo sit voluptate enim sint. Nostrum!</p>
                    </div>
                    <div className='my-5'>
                        <h1 className='text-xl mb-3'>About Brand</h1>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic, labore facilis nihil provident maxime consequuntur dicta debitis natus quisquam, est, assumenda dolorem error repellat obcaecati ratione enim minus magni? Veniam ipsam ab ad explicabo sit voluptate enim sint. Nostrum!</p>
                    </div>
                </div>

                <div className='w-full px-10'>
                    <h1 className='text-xl mb-3'>Rating & Review</h1>
                    <div className='flex w-full my-5'>
                        <div className='w-20 h-20 bg-white rounded-lg'>mudittiwrai</div>
                        <div className='px-5'>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, id veritatis harum reprehenderit doloremque blanditiis voluptate placeat tenetur nostrum aperiam earum doloribus necessitatibus sit nobis unde magnam, maxime, distinctio optio enim! Labore atque animi est incidunt! Vel eius tempore possimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas possimus aliquam soluta illo voluptatem, iure nobis similique velit eius neque eligendi nemo accusamus esse cumque eveniet dignissimos? Pariatur culpa accusamus aspernatur rem distinctio dicta repudiandae, ad amet atque cupiditate consequuntur?</p>
                        </div>
                    </div>
                    <div className='flex w-full my-5'>
                        <div className='w-20 h-20 bg-white rounded-lg'>mudittiwrai</div>
                        <div className='px-5'>
                            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, id veritatis harum reprehenderit doloremque blanditiis voluptate placeat tenetur nostrum aperiam earum doloribus necessitatibus sit nobis unde magnam, maxime, distinctio optio enim! Labore atque animi est incidunt! Vel eius tempore possimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas possimus aliquam soluta illo voluptatem, iure nobis similique velit eius neque eligendi nemo accusamus esse cumque eveniet dignissimos? Pariatur culpa accusamus aspernatur rem distinctio dicta repudiandae, ad amet atque cupiditate consequuntur?</p>
                        </div>
                    </div>

                </div>


                <div className='w-full px-10 mt-6'>
                    <h1 className='text-xl mb-5'>FAQ</h1>


                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-white border border-b-0 border-gray-200" style={{ 'backgroundColor': 'black' }} data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                <span className='text-white'>what is this website</span>
                                <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700" style={{ 'transition': '1s' }}>
                                <p class="mb-2 text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus ab blanditiis. Quia tenetur, enim nesciunt, voluptates quaerat ratione quidem asperiores ea error praesentium, maiores aperiam in qui veniam. Quas?</p>
                            </div>
                        </div>
                        <h2 id="accordion-collapse-heading-2">
                            <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-left text-white border border-b-0 border-gray-200" style={{ 'backgroundColor': 'black' }} data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                <span className='text-white'>what is this website</span>
                                <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium doloribus ab blanditiis. Quia tenetur, enim nesciunt, voluptates quaerat ratione quidem asperiores ea error praesentium, maiores aperiam in qui veniam. Quas?</p>
                            </div>
                        </div>

                    </div>


                </div>


                <div className='w-full px-10 mt-10'>
                    <h1 className='text-xl mb-3'>Payment Method Available</h1>
                    <h1 className='text-xs mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, dolorem.</h1>
                    <h1 className='text-xs mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, molestias.</h1>
                </div>


                <div className='w-full px-10 mt-7'>
                    <h1 className='text-xl mb-5'>Services</h1>
                    <div className='flex w-full justify-around'>
                        <div className='flex w-1/3 flex-col items-center justify-center'>
                            <img src={group} width="50px" alt="" />
                            <span>30 days return</span>
                        </div>
                        <div className='flex w-1/3 flex-col items-center justify-center'>
                            <img src={group} width="50px" alt="" />
                            <span>30 days return</span>
                        </div>
                        <div className='flex w-1/3 flex-col items-center justify-center'>
                            <img src={group} width="50px" alt="" />
                            <span>30 days return</span>
                        </div>
                    </div>
                </div>

                <div className='w-full px-10 mt-12'>
                    <h1 className='text-xl mb-5 text-center'>Related Products</h1>
                    <div className='w-full flex'>
                        <Product_page_comp border="yes" />
                        <Product_page_comp border="yes" />
                        <Product_page_comp border="yes" />
                        <Product_page_comp border="no" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Product_page;