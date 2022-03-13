
import logo from '../src/assets/logo.png';
import homepagefirstcomp from './assets/homepagefirstcomp.png'
function Products() {
    return (
        <>
            <div className='w-full flex flex-col my-6'>
                <div className='flex justify-center'>
                    <img src={logo} height="200px" width="200px" alt="" />
                </div>
                <div className='flex'>
                    <div className='w-1/4 mt-28'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl text-center border-2 border-white py-2'>Filter</h1>
                            <div className='border-2 border-t-0 border-white py-5'>
                                <div className='my-1'><input type="radio" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Men</div>
                                <div className='my-1'><input type="radio" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Women</div>
                                <div className='my-1'><input type="radio" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Couples</div>
                            </div>

                            <div className='border-2 border-t-0 border-white py-2'>
                                <h1 className='text-xl text-center mb-2'>Categories</h1>
                                <div className='my-1'><input type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Men</div>
                                <div className='my-1'><input type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Women</div>
                                <div className='my-1'><input type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Couples</div>
                            </div>
                            <div className='border-2 border-t-0 border-white py-2 h-full'>
                                <h1 className='text-xl text-center mb-2'>Brand</h1>
                                <div className='my-1'><input type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Men</div>
                                <div className='my-1'><input type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Women</div>
                                <div className='my-1'><input type="checkbox" className='mx-4 bg-transparent' name="" id="" placeholder='' style={{ 'border': '1px solid white' }} />Couples</div>
                            </div>

                        </div>
                    </div>
                    <div className='w-3/4 flex flex-col'>
                        <h1 className='font-bold text-2xl mx-24 mt-10' style={{ 'color': '#FF007A' }}>Heading</h1>
                        <div className='flex justify-around px-10 my-10'>
                            <div className='w-2/6 h-max bg-white p-3 rounded-lg flex flex-col'>
                                <img className='object-fill' src={homepagefirstcomp} alt="" />
                                <h6 className='font-bold text-black text-center'>Product Name</h6>
                                <h6 className='text-black text-center'>Company Name</h6>
                                <h6 className='text-black text-center'>Rs 200</h6>
                            </div>
                            <div className='w-2/6 h-max bg-white p-3 rounded-lg'>
                                <img className='object-fill' src={homepagefirstcomp} alt="" />
                                <h6 className='font-bold text-black text-center'>Product Name</h6>
                                <h6 className='text-black text-center'>Company Name</h6>
                                <h6 className='text-black text-center'>Rs 200</h6>
                            </div>
                        </div>
                        <div className='flex justify-around px-10 my-10'>
                            <div className='w-2/6 h-max bg-white p-3 rounded-lg'>
                                <img className='object-fill' src={homepagefirstcomp} alt="" />
                                <h6 className='font-bold text-black text-center'>Product Name</h6>
                                <h6 className='text-black text-center'>Company Name</h6>
                                <h6 className='text-black text-center'>Rs 200</h6>
                            </div>
                            <div className='w-2/6 h-max bg-white p-3 rounded-lg'>
                                <img className='object-fill' src={homepagefirstcomp} alt="" />
                                <h6 className='font-bold text-black text-center'>Product Name</h6>
                                <h6 className='text-black text-center'>Company Name</h6>
                                <h6 className='text-black text-center'>Rs 200</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Products;