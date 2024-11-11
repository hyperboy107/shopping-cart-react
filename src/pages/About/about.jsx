

function AboutPage(){
    return (
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div>
      <nav>
            <a href="/" className="mr-5 font-semibold leading-6 text-gray-600 hover:text-gray-900">Home</a>
            <a href="/cart" className="mr-5 font-semibold leading-6 text-gray-600 hover:text-gray-900">Cart</a>
            <a href="/product-list" className="mr-5 font-semibold leading-6 text-gray-600 hover:text-gray-900">Products</a>
            <a href="/pricing" className="mr-5 font-semibold leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
        </nav> <br/>
        </div>
        <section className="text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg p-8 mb-12 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg">
          Welcome to [Your Store Name]! We believe in delivering quality products and exceptional service to our customers.
        </p>
        </section>
        {/* Our Story Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in [Year], [Your Store Name] began with a simple mission: to make shopping more enjoyable and accessible.
          Our journey started with a small team passionate about e-commerce, and over the years, we have grown into a thriving
          community of like-minded individuals. Our commitment to quality, innovation, and customer satisfaction is at the heart
          of everything we do.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-gray-600">
            To provide our customers with a seamless shopping experience, offering top-quality products at competitive prices
            while fostering a culture of excellence and integrity.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
          <p className="text-gray-600">
            To be a leading e-commerce brand recognized for innovation, quality, and customer trust. We aim to empower customers
            by delivering products that meet their needs and exceed their expectations.
          </p>
        </div>
      </section>
        </div>
    )
}

export default AboutPage;