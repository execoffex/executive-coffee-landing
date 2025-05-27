export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Adding a slight offset to account for sticky header height
    const headerOffset = 100; // Adjust this value based on your header's height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}; 