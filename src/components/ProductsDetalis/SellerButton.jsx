export function SellerButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center py-3 px-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors mx-2 mb-4">
      К продавцу
    </a>
  );
}
