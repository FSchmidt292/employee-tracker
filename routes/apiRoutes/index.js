const router = express.Router();
const apiRoutes = require('./routes/apiRoutes');

router.use(require('./departmentRoutes'));
router.use(require('./employeeRoutes'));
router.use(require('./roleRoutes'));