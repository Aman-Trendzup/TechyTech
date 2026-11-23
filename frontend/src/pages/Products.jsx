import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getPublicEbooks } from '@/api/ebookApi';

export default function Products() {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ totalPages: 1, totalEbooks: 0 });

  const fetchEbooks = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await getPublicEbooks({
        page,
        limit: 12,
        search,
      });

      if (res.success) {
        setEbooks(res.ebooks || []);
        setPagination({
          totalPages: res.pagination?.totalPages || 1,
          totalEbooks: res.pagination?.totalEbooks || 0,
        });
      }
    } catch (err) {
      console.error('Error fetching eBooks:', err);
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEbooks();
  }, [page]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchEbooks();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-[#151514] select-none">
      {/* Main Content Area */}
      <section className="relative z-10 w-full py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-12 bg-[#f4f0eb]">
        <div className="max-w-7xl mx-auto">

          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#e2dcd5]">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#151514]/60">
              Showing {pagination.totalEbooks} {pagination.totalEbooks === 1 ? 'Product' : 'Products'}
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search products by title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-full bg-white border border-[#ded8d0] focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-[#151514] placeholder-[#151514]/40 text-sm font-body outline-none transition-all shadow-sm"
              />
              <Search className="w-4 h-4 text-[#151514]/50 absolute left-3.5 top-3.5" />
            </form>
          </div>

          {/* Error State */}
          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-sm mb-8 text-center font-body">
              {error}
            </div>
          )}

          {/* Loading Skeleton */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-96 rounded-2xl bg-white/50 border border-[#ded8d0] animate-pulse"
                />
              ))}
            </div>
          ) : ebooks.length === 0 ? (
            <div className="text-center py-24 rounded-2xl bg-white/50 border border-[#ded8d0] p-8 max-w-xl mx-auto">
              <h3 className="font-display text-3xl text-[#151514] uppercase mb-2 tracking-wide">
                No Products Found
              </h3>
              <p className="font-body text-[#151514]/70 text-sm">
                Try adjusting your search query or check back soon for our newest releases.
              </p>
            </div>
          ) : (
            /* Products Grid (Clean Swiss Cards) */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ebooks.map((ebook) => (
                <Link
                  key={ebook._id}
                  to={`/products/${ebook.slug}`}
                  className="group relative flex flex-col rounded-2xl bg-white/70 hover:bg-white border border-[#ded8d0] hover:border-[#c5bdb3] overflow-hidden hover:shadow-md transition-all duration-300 ease-out cursor-pointer"
                >
                  {/* Cover Image Container */}
                  <div className="relative aspect-[1/1.414] w-full overflow-hidden bg-[#eae5df]">
                    {ebook.coverImage?.url ? (
                      <img
                        src={ebook.coverImage.url}
                        alt={ebook.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#151514]/40">
                        <BookOpen className="w-12 h-12" />
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-body text-base sm:text-lg font-bold text-[#151514] group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                        {ebook.title}
                      </h3>
                      <p className="font-body text-xs text-[#151514]/70 line-clamp-2 mt-2 leading-relaxed">
                        {ebook.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#ded8d0]/60 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#151514]/50 block">
                          Price
                        </span>
                        <span className="font-display text-xl font-bold text-[#151514] tracking-wide">
                          €{Number(ebook.price).toFixed(2)}
                        </span>
                      </div>

                      <span className="w-9 h-9 rounded-full bg-[#151514]/5 text-[#151514] group-hover:bg-secondary group-hover:text-primary flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-3">
              <button
                disabled={page <= 1 || loading}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="p-3 rounded-full bg-white border border-[#ded8d0] text-[#151514] hover:bg-secondary hover:text-primary hover:border-secondary disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#151514] disabled:hover:border-[#ded8d0] transition-colors shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-[#151514]/70 px-4">
                Page {page} of {pagination.totalPages}
              </span>
              <button
                disabled={page >= pagination.totalPages || loading}
                onClick={() => setPage((p) => p + 1)}
                className="p-3 rounded-full bg-white border border-[#ded8d0] text-[#151514] hover:bg-secondary hover:text-primary hover:border-secondary disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#151514] disabled:hover:border-[#ded8d0] transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
