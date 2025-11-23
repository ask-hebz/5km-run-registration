# 🤝 Contributing Guide

Thank you for considering contributing to the 5KM Run Registration Portal!

## 🎯 Ways to Contribute

1. **Report Bugs** - Found a bug? Create an issue!
2. **Suggest Features** - Have an idea? We'd love to hear it!
3. **Improve Documentation** - Help others understand the code
4. **Submit Code** - Fix bugs or add features

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

\`\`\`bash
git clone https://github.com/YOUR_USERNAME/5km-run-registration.git
cd 5km-run-registration
\`\`\`

### 3. Create a Branch

\`\`\`bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
\`\`\`

### 4. Make Your Changes

- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Test your changes locally

### 5. Commit Your Changes

\`\`\`bash
git add .
git commit -m "Add: description of your changes"
\`\`\`

**Commit Message Format:**
- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for updates to existing features
- `Docs:` for documentation changes

### 6. Push to Your Fork

\`\`\`bash
git push origin feature/your-feature-name
\`\`\`

### 7. Create a Pull Request

1. Go to the original repository
2. Click "Pull Requests" → "New Pull Request"
3. Click "compare across forks"
4. Select your fork and branch
5. Describe your changes
6. Submit the pull request

## 💡 Feature Ideas

Here are some features you could add:

### Easy Improvements
- [ ] Email confirmation after registration
- [ ] Export registrations to CSV/Excel
- [ ] Print participant list
- [ ] Search/filter in admin dashboard
- [ ] Registration statistics charts

### Medium Improvements
- [ ] QR code generation for each registration
- [ ] SMS notifications
- [ ] Payment integration
- [ ] Multiple event support
- [ ] Registration deadline countdown

### Advanced Improvements
- [ ] Team registration
- [ ] Real-time leaderboard
- [ ] Photo upload for participants
- [ ] Certificate generation
- [ ] Mobile app (React Native)

## 🎨 Design Guidelines

- Use Tailwind CSS for styling
- Follow mobile-first approach
- Maintain PBBFA color scheme (Orange/Blue)
- Keep UI simple and professional
- Ensure accessibility (WCAG 2.1)

## 🧪 Testing

Before submitting:

1. **Test locally**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Test the build**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

3. **Test both user and admin flows**
   - Registration form submission
   - Admin login
   - Viewing registrations
   - Adding remarks

4. **Test PWA functionality**
   - Install on mobile
   - Install on desktop
   - Test offline mode

5. **Test on different browsers**
   - Chrome
   - Firefox
   - Safari
   - Edge

## 📝 Code Style

### JavaScript/React
- Use functional components
- Use hooks instead of class components
- Keep components small and focused
- Use meaningful variable names
- Add PropTypes or TypeScript (if converting)

### CSS/Tailwind
- Use Tailwind utility classes
- Avoid custom CSS unless necessary
- Keep responsive design in mind
- Follow existing color scheme

### Files
- One component per file
- Meaningful file names
- Organize by feature

## 🐛 Reporting Bugs

When reporting bugs, include:

1. **Description** - What happened?
2. **Expected Behavior** - What should happen?
3. **Steps to Reproduce**
   - Step 1
   - Step 2
   - Step 3
4. **Screenshots** - If applicable
5. **Environment**
   - Browser/Version
   - Device
   - Operating System

## 💬 Questions?

- Open an issue for questions
- Tag with "question" label
- Be specific about what you need help with

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn

## 🙏 Thank You!

Every contribution, no matter how small, helps make this project better!

**Happy coding! 🎉**
