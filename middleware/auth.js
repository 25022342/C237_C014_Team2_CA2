// =========================================================
// Auth middleware - referenced in app.js but never defined
// in the uploaded version. Without this file, every route using
// checkAuthenticated/checkAdmin/checkTeacher/checkStudent crashes.
// =========================================================

function checkAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  req.flash('error', 'Please log in to view that page.');
  res.redirect('/login');
}

function checkAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  res.status(403).send('Access denied: Admins only.');
}

function checkTeacher(req, res, next) {
  if (req.session.user && req.session.user.role === 'teacher') {
    return next();
  }
  res.status(403).send('Access denied: Teachers only.');
}

function checkStudent(req, res, next) {
  if (req.session.user && req.session.user.role === 'student') {
    return next();
  }
  res.status(403).send('Access denied: Students only.');
}

module.exports = { checkAuthenticated, checkAdmin, checkTeacher, checkStudent };
