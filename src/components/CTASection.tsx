
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
          <span className="text-sm font-medium text-gray-700">✨ Ready to Transform?</span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gray-900">Start Your Career</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transformation Today
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Join thousands of professionals who have already transformed their careers with Skanjo AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full">
            Get Started Free
            <span className="ml-2">→</span>
          </Button>
          <Button variant="outline" className="px-8 py-4 text-lg rounded-full border-2 hover:bg-gray-50">
            Schedule Demo
          </Button>
        </div>

        {/* Fine Print */}
        <p className="text-sm text-gray-500">
          No credit card required • 1-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
