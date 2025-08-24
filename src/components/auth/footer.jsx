export default function AuthFooter() {
  return (
    <footer className="w-full border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 py-4 px-6 flex justify-center">
      <p>
        &copy; {new Date().getFullYear()} Aeon Development Center. All rights
        reserved.
      </p>
    </footer>
  );
}
