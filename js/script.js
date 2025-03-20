// Stowe Condo Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('show') && !event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
            navMenu.classList.remove('show');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show the selected slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Initialize slider
    if (slides.length && dots.length) {
        // Set up automatic sliding
        slideInterval = setInterval(nextSlide, 5000);
        
        // Event listeners for manual controls
        if (prevButton && nextButton) {
            prevButton.addEventListener('click', function() {
                clearInterval(slideInterval);
                prevSlide();
                slideInterval = setInterval(nextSlide, 5000);
            });
            
            nextButton.addEventListener('click', function() {
                clearInterval(slideInterval);
                nextSlide();
                slideInterval = setInterval(nextSlide, 5000);
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                clearInterval(slideInterval);
                showSlide(index);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });
    }
    
    // Guest Guide Tabs
    const tabLinks = document.querySelectorAll('.guide-nav ul li');
    const tabContents = document.querySelectorAll('.guide-tab');
    
    if (tabLinks.length && tabContents.length) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Remove active class from all links
                tabLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Hide all tab contents
                tabContents.forEach(tab => tab.classList.remove('active'));
                
                // Show the corresponding tab content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Booking form validation
    const bookingForm = document.getElementById('availability-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const checkInDate = document.getElementById('check-in-date').value;
            const checkOutDate = document.getElementById('check-out-date').value;
            const guests = document.getElementById('guests').value;
            
            if (!checkInDate || !checkOutDate || !guests) {
                alert('Please fill in all fields');
                return;
            }
            
            // Convert to Date objects
            const checkIn = new Date(checkInDate);
            const checkOut = new Date(checkOutDate);
            
            // Validate dates
            if (checkIn >= checkOut) {
                alert('Check-out date must be after check-in date');
                return;
            }
            
            // Calculate number of nights
            const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
            
            if (nights < 2) {
                alert('Minimum stay is 2 nights');
                return;
            }
            
            // Here you would typically send this data to a booking API
            // For now, we'll just show a confirmation message
            alert(`Thank you for your interest in booking our condo!\n\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}\nNights: ${nights}\n\nWe'll redirect you to our booking platform to complete your reservation.`);
            
            // Reset form
            bookingForm.reset();
        });
    }
    
    // Simple testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (testimonials.length > 1) {
        // Hide all testimonials except the first one
        for (let i = 1; i < testimonials.length; i++) {
            testimonials[i].style.display = 'none';
        }
        
        // Change testimonial every 5 seconds
        setInterval(() => {
            testimonials[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].style.display = 'block';
        }, 5000);
    }
    
    // Add placeholder images
    document.querySelectorAll('.placeholder-img').forEach(img => {
        if (!img.src || img.src.endsWith('.jpg')) {
            // Set a gradient background for placeholder images
            img.style.background = 'linear-gradient(135deg, #4F6D7A, #2C5F2D)';
            img.style.minHeight = '300px';
        }
    });
    
    // Seasonal Activities Tabs
    const seasonTabs = document.querySelectorAll('.season-tab');
    const seasonContents = document.querySelectorAll('.season-content');
    
    if (seasonTabs.length && seasonContents.length) {
        seasonTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                seasonTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all content sections
                seasonContents.forEach(content => content.classList.remove('active'));
                
                // Show the corresponding content section
                const season = this.getAttribute('data-season');
                document.getElementById(season).classList.add('active');
            });
        });
    }
    
    // Dining & Shopping Category Tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    const categoryContents = document.querySelectorAll('.category-content');
    
    if (categoryTabs.length && categoryContents.length) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                categoryTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all content sections
                categoryContents.forEach(content => content.classList.remove('active'));
                
                // Show the corresponding content section
                const category = this.getAttribute('data-category');
                document.getElementById(category).classList.add('active');
            });
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.sticky-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Initialize GLightbox for gallery images if available
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.gallery-item',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
        });
    }
    
    // Gallery filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || filterValue === category) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }
    
    // Floor plan hotspot functionality
    const hotspots = document.querySelectorAll('.hotspot');
    
    if (hotspots.length) {
        hotspots.forEach(hotspot => {
            // Add hover effect for mobile
            hotspot.addEventListener('touchstart', function() {
                const tooltip = this.querySelector('.hotspot-tooltip');
                if (tooltip) {
                    tooltip.style.opacity = '1';
                    tooltip.style.visibility = 'visible';
                }
            });
            
            hotspot.addEventListener('touchend', function() {
                const tooltip = this.querySelector('.hotspot-tooltip');
                if (tooltip) {
                    setTimeout(() => {
                        tooltip.style.opacity = '0';
                        tooltip.style.visibility = 'hidden';
                    }, 2000);
                }
            });
        });
    }
});
