

function Navbar(){
    return ( 
        <section class="w-full px-8 text-gray-700 bg-white text-center">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div class="relative flex flex-col md:flex-row">
            <a href="/home" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">AI<span class="text-indigo-600">.</span></span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 text-center">
                <a href="/" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 text-center">Home</a>
                <a href="/product-list" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 text-center">Products</a>
                <a href="/cart" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 text-center">Cart</a>
                <a href="/pricing" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 text-center">Pricing</a>
            </nav>
        </div>
    </div>
    </section>
    )
}

export default Navbar;