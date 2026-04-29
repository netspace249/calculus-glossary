const GLOSSARY_DATA = {
  topics: [
    {
      id: "limits",
      name: "Limits & Continuity",
      emoji: "🎯",
      description: "Fundamental concepts of approaching values and continuous functions.",
      terms: [
        {
          term: "Limit",
          phonetic: "/ˈlɪm.ɪt/",
          vietnamese: "Giới hạn",
          definition: "The value that a function approaches as the input approaches a specified value. It describes the behavior of a function near a point, even if the function is not defined at that point.",
          example: "lim(x→2) (x² - 4)/(x - 2) = 4, even though the function is undefined at x = 2.",
          related: ["Continuity", "One-sided limit", "Infinite limit"]
        },
        {
          term: "Continuity",
          phonetic: "/ˌkɒn.tɪˈnjuː.ɪ.ti/",
          vietnamese: "Tính liên tục",
          definition: "A function is continuous at a point if the limit exists at that point, the function is defined at that point, and the limit equals the function value.",
          example: "f(x) = x² is continuous everywhere because lim(x→a) x² = a² = f(a) for all a.",
          related: ["Limit", "Discontinuity", "Intermediate Value Theorem"]
        },
        {
          term: "One-sided limit",
          phonetic: "/wʌn saɪdɪd ˈlɪm.ɪt/",
          vietnamese: "Giới hạn một phía",
          definition: "The value a function approaches as the input approaches from only one direction — either from the left (−) or from the right (+).",
          example: "For f(x) = |x|/x, the left-hand limit as x→0⁻ is −1 and the right-hand limit as x→0⁺ is 1.",
          related: ["Limit", "Continuity", "Discontinuity"]
        },
        {
          term: "Infinite limit",
          phonetic: "/ˈɪn.fɪ.nɪt ˈlɪm.ɪt/",
          vietnamese: "Giới hạn vô cực",
          definition: "A limit where the function value increases or decreases without bound as the input approaches a certain value.",
          example: "lim(x→0⁺) 1/x = +∞",
          related: ["Limit", "Vertical asymptote", "Limit at infinity"]
        },
        {
          term: "Limit at infinity",
          phonetic: "/ˈlɪm.ɪt æt ɪnˈfɪn.ɪ.ti/",
          vietnamese: "Giới hạn tại vô cực",
          definition: "The value a function approaches as the input grows without bound (x → ∞ or x → −∞).",
          example: "lim(x→∞) 1/x = 0",
          related: ["Horizontal asymptote", "Infinite limit", "Limit"]
        },
        {
          term: "Squeeze Theorem",
          phonetic: "/skwiːz ˈθɪə.rəm/",
          vietnamese: "Định lý kẹp (Định lý Sandwich)",
          definition: "If g(x) ≤ f(x) ≤ h(x) near a point and lim g(x) = lim h(x) = L, then lim f(x) = L. Also known as the Sandwich Theorem.",
          example: "Since −1 ≤ sin(x) ≤ 1, we have −1/x ≤ sin(x)/x ≤ 1/x, so lim(x→∞) sin(x)/x = 0.",
          related: ["Limit", "Trigonometric limits"]
        },
        {
          term: "Intermediate Value Theorem",
          phonetic: "/ˌɪn.təˈmiː.di.ət ˈvæl.juː ˈθɪə.rəm/",
          vietnamese: "Định lý giá trị trung gian",
          definition: "If f is continuous on [a, b] and N is between f(a) and f(b), then there exists at least one c in (a, b) such that f(c) = N.",
          example: "If f(1) = −2 and f(3) = 5, and f is continuous, then there exists c ∈ (1,3) where f(c) = 0.",
          related: ["Continuity", "Root finding", "Bisection method"]
        },
        {
          term: "Discontinuity",
          phonetic: "/ˌdɪs.kɒn.tɪˈnjuː.ɪ.ti/",
          vietnamese: "Điểm gián đoạn",
          definition: "A point where a function is not continuous. Types include removable, jump, and infinite discontinuities.",
          example: "f(x) = 1/x has an infinite discontinuity at x = 0.",
          related: ["Continuity", "Limit", "One-sided limit"]
        },
        {
          term: "Horizontal asymptote",
          phonetic: "/ˌhɒr.ɪˈzɒn.təl ˈæs.ɪm.toʊt/",
          vietnamese: "Tiệm cận ngang",
          definition: "A horizontal line y = L that the graph of a function approaches as x → ∞ or x → −∞.",
          example: "y = 1/x has a horizontal asymptote at y = 0.",
          related: ["Limit at infinity", "Vertical asymptote", "Rational function"]
        },
        {
          term: "Vertical asymptote",
          phonetic: "/ˈvɜː.tɪ.kəl ˈæs.ɪm.toʊt/",
          vietnamese: "Tiệm cận đứng",
          definition: "A vertical line x = a where the function approaches ±∞ as x approaches a.",
          example: "f(x) = 1/(x − 3) has a vertical asymptote at x = 3.",
          related: ["Infinite limit", "Horizontal asymptote", "Discontinuity"]
        }
      ]
    },
    {
      id: "derivatives",
      name: "Derivatives",
      emoji: "📈",
      description: "Rates of change and slopes of tangent lines.",
      terms: [
        {
          term: "Derivative",
          phonetic: "/dɪˈrɪv.ə.tɪv/",
          vietnamese: "Đạo hàm",
          definition: "The instantaneous rate of change of a function, defined as the limit of the difference quotient: f'(x) = lim(h→0) [f(x+h) − f(x)] / h.",
          example: "If f(x) = x³, then f'(x) = 3x².",
          related: ["Differentiation", "Tangent line", "Rate of change"]
        },
        {
          term: "Differentiation",
          phonetic: "/ˌdɪf.ər.en.ʃiˈeɪ.ʃən/",
          vietnamese: "Phép tính đạo hàm",
          definition: "The process of finding the derivative of a function.",
          example: "Differentiating f(x) = sin(x) gives f'(x) = cos(x).",
          related: ["Derivative", "Chain rule", "Product rule"]
        },
        {
          term: "Chain rule",
          phonetic: "/tʃeɪn ruːl/",
          vietnamese: "Quy tắc dây chuyền (đạo hàm hàm hợp)",
          definition: "A rule for differentiating composite functions: if y = f(g(x)), then dy/dx = f'(g(x)) · g'(x).",
          example: "If y = sin(x²), then dy/dx = cos(x²) · 2x.",
          related: ["Derivative", "Composite function", "Product rule"]
        },
        {
          term: "Product rule",
          phonetic: "/ˈprɒd.ʌkt ruːl/",
          vietnamese: "Quy tắc tích (đạo hàm tích)",
          definition: "A rule for differentiating products: (fg)' = f'g + fg'.",
          example: "If y = x · sin(x), then y' = sin(x) + x·cos(x).",
          related: ["Derivative", "Quotient rule", "Chain rule"]
        },
        {
          term: "Quotient rule",
          phonetic: "/ˈkwoʊ.ʃənt ruːl/",
          vietnamese: "Quy tắc thương (đạo hàm thương)",
          definition: "A rule for differentiating quotients: (f/g)' = (f'g − fg') / g².",
          example: "If y = sin(x)/x, then y' = (x·cos(x) − sin(x)) / x².",
          related: ["Derivative", "Product rule", "Rational function"]
        },
        {
          term: "Implicit differentiation",
          phonetic: "/ɪmˈplɪs.ɪt ˌdɪf.ər.en.ʃiˈeɪ.ʃən/",
          vietnamese: "Đạo hàm ẩn",
          definition: "A technique for finding dy/dx when y is defined implicitly by an equation involving both x and y.",
          example: "For x² + y² = 25, differentiating both sides gives 2x + 2y(dy/dx) = 0, so dy/dx = −x/y.",
          related: ["Derivative", "Chain rule", "Related rates"]
        },
        {
          term: "Tangent line",
          phonetic: "/ˈtæn.dʒənt laɪn/",
          vietnamese: "Đường tiếp tuyến",
          definition: "A line that touches a curve at exactly one point and has the same slope as the curve at that point. Its slope equals the derivative at that point.",
          example: "The tangent line to y = x² at x = 1 is y = 2x − 1.",
          related: ["Derivative", "Slope", "Normal line"]
        },
        {
          term: "Higher-order derivative",
          phonetic: "/ˈhaɪ.ər ˈɔː.dər dɪˈrɪv.ə.tɪv/",
          vietnamese: "Đạo hàm cấp cao",
          definition: "The derivative of a derivative. The second derivative f''(x) measures the rate of change of the first derivative (concavity).",
          example: "If f(x) = x⁴, then f'(x) = 4x³, f''(x) = 12x², f'''(x) = 24x.",
          related: ["Derivative", "Concavity", "Acceleration"]
        },
        {
          term: "Related rates",
          phonetic: "/rɪˈleɪ.tɪd reɪts/",
          vietnamese: "Tốc độ liên quan (các đại lượng biến thiên liên quan)",
          definition: "Problems involving finding the rate of change of one quantity in terms of the rate of change of another related quantity using implicit differentiation with respect to time.",
          example: "A balloon's radius increases at 2 cm/s. Find how fast the volume changes when r = 5 cm.",
          related: ["Implicit differentiation", "Derivative", "Rate of change"]
        },
        {
          term: "L'Hôpital's rule",
          phonetic: "/loʊˈpiː.tɑːlz ruːl/",
          vietnamese: "Quy tắc L'Hôpital",
          definition: "If lim f(x)/g(x) gives 0/0 or ∞/∞, then lim f(x)/g(x) = lim f'(x)/g'(x), provided the latter limit exists.",
          example: "lim(x→0) sin(x)/x = lim(x→0) cos(x)/1 = 1.",
          related: ["Limit", "Derivative", "Indeterminate form"]
        }
      ]
    },
    {
      id: "applications",
      name: "Applications of Derivatives",
      emoji: "⚡",
      description: "Using derivatives to analyze functions and solve optimization problems.",
      terms: [
        {
          term: "Critical point",
          phonetic: "/ˈkrɪt.ɪ.kəl pɔɪnt/",
          vietnamese: "Điểm tới hạn (điểm dừng)",
          definition: "A point where the derivative is zero or undefined. Critical points are candidates for local maxima, local minima, or inflection points.",
          example: "For f(x) = x³ − 3x, f'(x) = 3x² − 3 = 0 gives critical points at x = ±1.",
          related: ["Local maximum", "Local minimum", "First derivative test"]
        },
        {
          term: "Local maximum",
          phonetic: "/ˈloʊ.kəl ˈmæk.sɪ.məm/",
          vietnamese: "Cực đại (địa phương)",
          definition: "A point where the function value is greater than or equal to the values at all nearby points.",
          example: "f(x) = −x² has a local maximum at x = 0 where f(0) = 0.",
          related: ["Critical point", "Local minimum", "Global maximum"]
        },
        {
          term: "Local minimum",
          phonetic: "/ˈloʊ.kəl ˈmɪn.ɪ.məm/",
          vietnamese: "Cực tiểu (địa phương)",
          definition: "A point where the function value is less than or equal to the values at all nearby points.",
          example: "f(x) = x² has a local minimum at x = 0 where f(0) = 0.",
          related: ["Critical point", "Local maximum", "Global minimum"]
        },
        {
          term: "Concavity",
          phonetic: "/kɒnˈkæv.ɪ.ti/",
          vietnamese: "Tính lõm / lồi",
          definition: "Describes the direction a curve bends. A function is concave up (f'' > 0) if it bends upward, and concave down (f'' < 0) if it bends downward.",
          example: "f(x) = x² is concave up everywhere since f''(x) = 2 > 0.",
          related: ["Second derivative", "Inflection point", "Higher-order derivative"]
        },
        {
          term: "Inflection point",
          phonetic: "/ɪnˈflek.ʃən pɔɪnt/",
          vietnamese: "Điểm uốn",
          definition: "A point where the concavity of a function changes from concave up to concave down, or vice versa.",
          example: "f(x) = x³ has an inflection point at x = 0 where concavity changes.",
          related: ["Concavity", "Second derivative", "Critical point"]
        },
        {
          term: "First derivative test",
          phonetic: "/fɜːst dɪˈrɪv.ə.tɪv test/",
          vietnamese: "Phép thử đạo hàm cấp một",
          definition: "A method to classify critical points by examining the sign change of f'(x) around the point. If f' changes from + to −, it's a local max; from − to +, it's a local min.",
          example: "For f(x) = x³ − 3x, f'(x) changes from + to − at x = −1 (local max) and − to + at x = 1 (local min).",
          related: ["Critical point", "Second derivative test", "Local maximum"]
        },
        {
          term: "Second derivative test",
          phonetic: "/ˈsek.ənd dɪˈrɪv.ə.tɪv test/",
          vietnamese: "Phép thử đạo hàm cấp hai",
          definition: "If f'(c) = 0 and f''(c) > 0, then c is a local minimum. If f''(c) < 0, then c is a local maximum. If f''(c) = 0, the test is inconclusive.",
          example: "For f(x) = x⁴, f'(0) = 0 and f''(0) = 0, so the test is inconclusive at x = 0.",
          related: ["First derivative test", "Concavity", "Critical point"]
        },
        {
          term: "Optimization",
          phonetic: "/ˌɒp.tɪ.maɪˈzeɪ.ʃən/",
          vietnamese: "Tối ưu hóa",
          definition: "The process of finding the maximum or minimum value of a function, often subject to constraints. Uses derivatives to find critical points.",
          example: "Find the dimensions of a rectangle with perimeter 20 that maximizes area: A = x(10−x), max at x = 5.",
          related: ["Critical point", "Local maximum", "Local minimum"]
        },
        {
          term: "Mean Value Theorem",
          phonetic: "/miːn ˈvæl.juː ˈθɪə.rəm/",
          vietnamese: "Định lý giá trị trung bình",
          definition: "If f is continuous on [a,b] and differentiable on (a,b), then there exists c in (a,b) such that f'(c) = [f(b) − f(a)] / (b − a).",
          example: "For f(x) = x² on [1,3]: f'(c) = (9−1)/(3−1) = 4, so c = 2.",
          related: ["Derivative", "Rolle's Theorem", "Continuity"]
        },
        {
          term: "Rolle's Theorem",
          phonetic: "/roʊlz ˈθɪə.rəm/",
          vietnamese: "Định lý Rolle",
          definition: "A special case of the Mean Value Theorem: if f is continuous on [a,b], differentiable on (a,b), and f(a) = f(b), then there exists c in (a,b) where f'(c) = 0.",
          example: "f(x) = x² − 4x on [0,4]: f(0) = f(4) = 0, so there exists c where f'(c) = 0. Indeed f'(2) = 0.",
          related: ["Mean Value Theorem", "Critical point", "Derivative"]
        }
      ]
    },
    {
      id: "integrals",
      name: "Integrals",
      emoji: "∫",
      description: "Antiderivatives, definite integrals, and accumulation of quantities.",
      terms: [
        {
          term: "Integral",
          phonetic: "/ˈɪn.tɪ.ɡrəl/",
          vietnamese: "Tích phân",
          definition: "A mathematical concept representing the accumulation of quantities, the area under a curve, or the reverse of differentiation.",
          example: "∫ 2x dx = x² + C",
          related: ["Antiderivative", "Definite integral", "Indefinite integral"]
        },
        {
          term: "Antiderivative",
          phonetic: "/ˌæn.tiˈdɪˈrɪv.ə.tɪv/",
          vietnamese: "Nguyên hàm",
          definition: "A function F whose derivative equals f: F'(x) = f(x). Also called a primitive function.",
          example: "An antiderivative of f(x) = 2x is F(x) = x² + C.",
          related: ["Integral", "Indefinite integral", "Fundamental Theorem of Calculus"]
        },
        {
          term: "Definite integral",
          phonetic: "/ˈdef.ɪ.nɪt ˈɪn.tɪ.ɡrəl/",
          vietnamese: "Tích phân xác định",
          definition: "The integral of a function over a specific interval [a,b], representing the net signed area between the function and the x-axis.",
          example: "∫₀² x² dx = [x³/3]₀² = 8/3",
          related: ["Integral", "Fundamental Theorem of Calculus", "Riemann sum"]
        },
        {
          term: "Indefinite integral",
          phonetic: "/ɪnˈdef.ɪ.nɪt ˈɪn.tɪ.ɡrəl/",
          vietnamese: "Tích phân bất định",
          definition: "The general antiderivative of a function, written as ∫f(x)dx = F(x) + C, where C is the constant of integration.",
          example: "∫ cos(x) dx = sin(x) + C",
          related: ["Antiderivative", "Definite integral", "Constant of integration"]
        },
        {
          term: "Fundamental Theorem of Calculus",
          phonetic: "/ˌfʌn.dəˈmen.təl ˈθɪə.rəm əv ˈkæl.kjʊ.ləs/",
          vietnamese: "Định lý cơ bản của Giải tích",
          definition: "Connects differentiation and integration. Part 1: d/dx ∫ₐˣ f(t)dt = f(x). Part 2: ∫ₐᵇ f(x)dx = F(b) − F(a) where F' = f.",
          example: "∫₁³ 2x dx = [x²]₁³ = 9 − 1 = 8",
          related: ["Definite integral", "Antiderivative", "Derivative"]
        },
        {
          term: "Riemann sum",
          phonetic: "/ˈriː.mɑːn sʌm/",
          vietnamese: "Tổng Riemann",
          definition: "An approximation of the area under a curve by dividing the region into rectangles and summing their areas. The definite integral is the limit of Riemann sums.",
          example: "Approximate ∫₀¹ x² dx using 4 right rectangles: Σ (i/4)² · (1/4) for i = 1 to 4.",
          related: ["Definite integral", "Partition", "Area under curve"]
        },
        {
          term: "Integration by substitution",
          phonetic: "/ˌɪn.tɪˈɡreɪ.ʃən baɪ ˌsʌb.stɪˈtjuː.ʃən/",
          vietnamese: "Tích phân bằng phép đổi biến",
          definition: "A technique that reverses the chain rule: substitute u = g(x), du = g'(x)dx to simplify the integral. Also called u-substitution.",
          example: "∫ 2x·cos(x²) dx: let u = x², du = 2x dx → ∫ cos(u) du = sin(u) + C = sin(x²) + C.",
          related: ["Chain rule", "Integral", "Integration by parts"]
        },
        {
          term: "Integration by parts",
          phonetic: "/ˌɪn.tɪˈɡreɪ.ʃən baɪ pɑːrts/",
          vietnamese: "Tích phân từng phần",
          definition: "A technique based on the product rule: ∫u dv = uv − ∫v du. Used when the integrand is a product of two functions.",
          example: "∫ x·eˣ dx: let u = x, dv = eˣdx → xe^x − ∫eˣdx = xeˣ − eˣ + C.",
          related: ["Product rule", "Integral", "Integration by substitution"]
        },
        {
          term: "Improper integral",
          phonetic: "/ɪmˈprɒp.ər ˈɪn.tɪ.ɡrəl/",
          vietnamese: "Tích phân suy rộng",
          definition: "An integral where the interval is infinite or the integrand has an infinite discontinuity. Evaluated as a limit.",
          example: "∫₁^∞ 1/x² dx = lim(b→∞) [−1/x]₁ᵇ = 0 − (−1) = 1.",
          related: ["Definite integral", "Convergence", "Divergence"]
        },
        {
          term: "Constant of integration",
          phonetic: "/ˈkɒn.stənt əv ˌɪn.tɪˈɡreɪ.ʃən/",
          vietnamese: "Hằng số tích phân",
          definition: "The arbitrary constant C added to an indefinite integral, representing the family of all antiderivatives.",
          example: "∫ 3x² dx = x³ + C, where C can be any real number.",
          related: ["Indefinite integral", "Antiderivative", "Initial condition"]
        }
      ]
    },
    {
      id: "applications-of-integrals",
      name: "Applications of Integrals (Ch.6)",
      emoji: "🧊",
      description: "Using integrals to compute areas between curves, volumes of solids of revolution, and other geometric applications.",
      terms: [
        {
          term: "Area between two curves",
          phonetic: "/ˈeə.ri.ə bɪˈtwiːn tuː kɜːvz/",
          vietnamese: "Diện tích giữa hai đường cong",
          definition: "The area of the region enclosed between two curves y = f(x) and y = g(x) on [a, b], calculated as ∫ₐᵇ |f(x) − g(x)| dx.",
          example: "The area between y = x² and y = x on [0,1] is ∫₀¹ (x − x²) dx = 1/6.",
          related: ["Definite integral", "Vertical strips", "Horizontal strips"]
        },
        {
          term: "Vertical strips",
          phonetic: "/ˈvɜː.tɪ.kəl strɪps/",
          vietnamese: "Dải dọc (phương pháp chia dọc)",
          definition: "A method of computing area between curves by integrating with respect to x. Each thin vertical rectangle has width dx and height |f(x) − g(x)|.",
          example: "Area = ∫ₐᵇ [f(x) − g(x)] dx, where f(x) is the top curve and g(x) is the bottom curve.",
          related: ["Area between two curves", "Horizontal strips", "Definite integral"]
        },
        {
          term: "Horizontal strips",
          phonetic: "/ˌhɒr.ɪˈzɒn.təl strɪps/",
          vietnamese: "Dải ngang (phương pháp chia ngang)",
          definition: "A method of computing area between curves by integrating with respect to y. Each thin horizontal rectangle has height dy and width |f(y) − g(y)|. Useful when curves are better expressed as functions of y.",
          example: "Area = ∫_c^d [f(y) − g(y)] dy, where f(y) is the right curve and g(y) is the left curve.",
          related: ["Area between two curves", "Vertical strips", "Definite integral"]
        },
        {
          term: "Volume",
          phonetic: "/ˈvɒl.juːm/",
          vietnamese: "Thể tích",
          definition: "The amount of three-dimensional space enclosed by a solid. In calculus, volumes are computed by integrating cross-sectional areas.",
          example: "The volume of a sphere of radius r is V = (4/3)πr³, derived by integration.",
          related: ["Cross-sectional area", "Solid of revolution", "Disk method"]
        },
        {
          term: "Cross-sectional area",
          phonetic: "/krɒs ˈsek.ʃən.əl ˈeə.ri.ə/",
          vietnamese: "Diện tích mặt cắt ngang",
          definition: "The area of a slice of a solid perpendicular to a given axis. The volume of a solid with known cross-sectional area A(x) is V = ∫ₐᵇ A(x) dx.",
          example: "A solid has square cross-sections with side length s(x) = √(1 − x²). Then A(x) = 1 − x² and V = ∫₋₁¹ (1 − x²) dx.",
          related: ["Volume", "Disk method", "Washer method"]
        },
        {
          term: "Solid of revolution",
          phonetic: "/ˈsɒl.ɪd əv ˌrev.əˈluː.ʃən/",
          vietnamese: "Khối tròn xoay",
          definition: "A three-dimensional solid formed by rotating a two-dimensional region around an axis (usually the x-axis or y-axis).",
          example: "Rotating the region under y = √x from x = 0 to x = 4 around the x-axis produces a paraboloid.",
          related: ["Disk method", "Washer method", "Shell method"]
        },
        {
          term: "Disk method",
          phonetic: "/dɪsk ˈmeθ.əd/",
          vietnamese: "Phương pháp đĩa tròn",
          definition: "A method for finding the volume of a solid of revolution by integrating the area of circular cross-sections (disks). V = π ∫ₐᵇ [R(x)]² dx, where R(x) is the radius of each disk.",
          example: "Rotating y = x² around the x-axis from 0 to 1: V = π ∫₀¹ (x²)² dx = π ∫₀¹ x⁴ dx = π/5.",
          related: ["Solid of revolution", "Washer method", "Cross-sectional area"]
        },
        {
          term: "Washer method",
          phonetic: "/ˈwɒʃ.ər ˈmeθ.əd/",
          vietnamese: "Phương pháp vành khăn",
          definition: "A method for finding the volume of a solid of revolution with a hole in the middle. V = π ∫ₐᵇ ([R(x)]² − [r(x)]²) dx, where R(x) is the outer radius and r(x) is the inner radius.",
          example: "Rotating the region between y = x and y = x² around the x-axis: V = π ∫₀¹ (x² − x⁴) dx.",
          related: ["Disk method", "Solid of revolution", "Shell method"]
        },
        {
          term: "Shell method",
          phonetic: "/ʃel ˈmeθ.əd/",
          vietnamese: "Phương pháp vỏ trụ",
          definition: "A method for finding the volume of a solid of revolution using cylindrical shells. V = 2π ∫ₐᵇ x · f(x) dx when rotating around the y-axis. Each shell has radius x, height f(x), and thickness dx.",
          example: "Rotating y = x² around the y-axis from x = 0 to x = 1: V = 2π ∫₀¹ x · x² dx = 2π ∫₀¹ x³ dx = π/2.",
          related: ["Washer method", "Disk method", "Solid of revolution"]
        },
        {
          term: "Cylindrical shell",
          phonetic: "/sɪˈlɪn.drɪ.kəl ʃel/",
          vietnamese: "Vỏ hình trụ",
          definition: "A thin hollow cylinder used in the shell method. When 'unwrapped' and flattened, it forms a thin rectangular slab with height f(x), width 2πx (circumference), and thickness dx.",
          example: "A cylindrical shell at radius x with height f(x) has volume ΔV ≈ 2πx · f(x) · dx.",
          related: ["Shell method", "Solid of revolution", "Volume"]
        }
      ]
    },
    {
      id: "sequences-series",
      name: "Sequences & Series",
      emoji: "🔢",
      description: "Infinite sequences, series, convergence tests, and power series.",
      terms: [
        {
          term: "Sequence",
          phonetic: "/ˈsiː.kwəns/",
          vietnamese: "Dãy số",
          definition: "An ordered list of numbers following a pattern, written as {aₙ}. Each number is called a term of the sequence.",
          example: "The sequence {1/n} = 1, 1/2, 1/3, 1/4, ... converges to 0.",
          related: ["Series", "Convergence", "Limit"]
        },
        {
          term: "Series",
          phonetic: "/ˈsɪə.riːz/",
          vietnamese: "Chuỗi số",
          definition: "The sum of the terms of a sequence: Σaₙ = a₁ + a₂ + a₃ + ... A series converges if its partial sums approach a finite limit.",
          example: "The geometric series Σ(1/2)ⁿ = 1 + 1/2 + 1/4 + ... = 2.",
          related: ["Sequence", "Convergence", "Partial sum"]
        },
        {
          term: "Convergence",
          phonetic: "/kənˈvɜː.dʒəns/",
          vietnamese: "Sự hội tụ",
          definition: "A sequence or series converges if it approaches a finite value. A series Σaₙ converges if the sequence of partial sums Sₙ has a finite limit.",
          example: "Σ 1/n² converges to π²/6 (Basel problem).",
          related: ["Divergence", "Series", "Limit"]
        },
        {
          term: "Divergence",
          phonetic: "/daɪˈvɜː.dʒəns/",
          vietnamese: "Sự phân kỳ",
          definition: "A sequence or series diverges if it does not approach a finite value. The harmonic series Σ1/n is a classic example of a divergent series.",
          example: "The harmonic series 1 + 1/2 + 1/3 + 1/4 + ... diverges to infinity.",
          related: ["Convergence", "Divergence test", "Harmonic series"]
        },
        {
          term: "Power series",
          phonetic: "/ˈpaʊ.ər ˈsɪə.riːz/",
          vietnamese: "Chuỗi lũy thừa",
          definition: "An infinite series of the form Σcₙ(x − a)ⁿ, where cₙ are coefficients and a is the center. It represents a function within its radius of convergence.",
          example: "eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + ... for all x.",
          related: ["Taylor series", "Radius of convergence", "Maclaurin series"]
        },
        {
          term: "Taylor series",
          phonetic: "/ˈteɪ.lər ˈsɪə.riːz/",
          vietnamese: "Chuỗi Taylor",
          definition: "The power series representation of a function centered at x = a: f(x) = Σ f⁽ⁿ⁾(a)/n! · (x − a)ⁿ.",
          example: "The Taylor series of sin(x) centered at 0 is x − x³/3! + x⁵/5! − ...",
          related: ["Power series", "Maclaurin series", "Radius of convergence"]
        },
        {
          term: "Radius of convergence",
          phonetic: "/ˈreɪ.di.əs əv kənˈvɜː.dʒəns/",
          vietnamese: "Bán kính hội tụ",
          definition: "The value R such that a power series converges for |x − a| < R and diverges for |x − a| > R. Found using the ratio test or root test.",
          example: "The series Σ xⁿ/n! has radius of convergence R = ∞ (converges for all x).",
          related: ["Power series", "Ratio test", "Interval of convergence"]
        }
      ]
    }
  ]
};
