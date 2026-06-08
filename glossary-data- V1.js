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
          vietnamese: "Định lý kẹp",
          definition: "If g(x) ≤ f(x) ≤ h(x) near a point and lim g(x) = lim h(x) = L, then lim f(x) = L.",
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
          related: ["Definite integral", "Vertical strips", "Horizontal strips"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#f8f9ff" rx="8"/>
  <!-- Shaded area between curves -->
  <path d="M 60 160 Q 100 60 190 80 Q 220 88 240 100 Q 220 130 190 140 Q 130 158 60 160 Z" fill="#4f8ef7" opacity="0.25"/>
  <!-- x-axis -->
  <line x1="40" y1="160" x2="290" y2="160" stroke="#555" stroke-width="1.5"/>
  <!-- y-axis -->
  <line x1="60" y1="20" x2="60" y2="175" stroke="#555" stroke-width="1.5"/>
  <!-- Arrow x -->
  <polygon points="290,156 298,160 290,164" fill="#555"/>
  <!-- Arrow y -->
  <polygon points="56,20 60,12 64,20" fill="#555"/>
  <!-- f(x) = x curve (top) -->
  <path d="M 60 160 Q 100 60 240 100" fill="none" stroke="#2563eb" stroke-width="2.2"/>
  <!-- g(x) = x^2 curve (bottom) -->
  <path d="M 60 160 Q 130 158 190 140 Q 220 130 240 100" fill="none" stroke="#e05c2a" stroke-width="2.2" stroke-dasharray="6,3"/>
  <!-- Vertical bounds a, b -->
  <line x1="60" y1="155" x2="60" y2="165" stroke="#555" stroke-width="1.5"/>
  <line x1="240" y1="95" x2="240" y2="165" stroke="#999" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Labels -->
  <text x="52" y="178" font-size="13" fill="#555" text-anchor="middle">a</text>
  <text x="240" y="178" font-size="13" fill="#555" text-anchor="middle">b</text>
  <text x="300" y="164" font-size="13" fill="#555">x</text>
  <text x="65" y="14" font-size="13" fill="#555">y</text>
  <text x="130" y="90" font-size="13" fill="#2563eb" font-style="italic">y = f(x)</text>
  <text x="175" y="158" font-size="13" fill="#e05c2a" font-style="italic">y = g(x)</text>
  <!-- Area label -->
  <text x="130" y="128" font-size="12" fill="#4f8ef7" font-weight="bold" text-anchor="middle">A</text>
</svg>`
        },
        {
          term: "Vertical strips",
          phonetic: "/ˈvɜː.tɪ.kəl strɪps/",
          vietnamese: "Dải dọc (phương pháp chia dọc)",
          definition: "A method of computing area between curves by integrating with respect to x. Each thin vertical rectangle has width dx and height |f(x) − g(x)|.",
          example: "Area = ∫ₐᵇ [f(x) − g(x)] dx, where f(x) is the top curve and g(x) is the bottom curve.",
          related: ["Area between two curves", "Horizontal strips", "Definite integral"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#f8fff8" rx="8"/>
  <!-- Axes -->
  <line x1="40" y1="165" x2="290" y2="165" stroke="#555" stroke-width="1.5"/>
  <line x1="60" y1="15" x2="60" y2="175" stroke="#555" stroke-width="1.5"/>
  <polygon points="290,161 298,165 290,169" fill="#555"/>
  <polygon points="56,15 60,7 64,15" fill="#555"/>
  <!-- Shaded vertical strips -->
  <rect x="80"  y="80"  width="18" height="70" fill="#22c55e" opacity="0.3"/>
  <rect x="100" y="72"  width="18" height="78" fill="#22c55e" opacity="0.3"/>
  <rect x="120" y="68"  width="18" height="82" fill="#22c55e" opacity="0.3"/>
  <rect x="140" y="70"  width="18" height="80" fill="#22c55e" opacity="0.3"/>
  <rect x="160" y="76"  width="18" height="74" fill="#22c55e" opacity="0.3"/>
  <rect x="180" y="86"  width="18" height="64" fill="#22c55e" opacity="0.3"/>
  <rect x="200" y="100" width="18" height="50" fill="#22c55e" opacity="0.3"/>
  <!-- Strip borders -->
  <rect x="80"  y="80"  width="18" height="70" fill="none" stroke="#16a34a" stroke-width="0.8"/>
  <rect x="100" y="72"  width="18" height="78" fill="none" stroke="#16a34a" stroke-width="0.8"/>
  <rect x="120" y="68"  width="18" height="82" fill="none" stroke="#16a34a" stroke-width="0.8"/>
  <rect x="140" y="70"  width="18" height="80" fill="none" stroke="#16a34a" stroke-width="0.8"/>
  <rect x="160" y="76"  width="18" height="74" fill="none" stroke="#16a34a" stroke-width="0.8"/>
  <rect x="180" y="86"  width="18" height="64" fill="none" stroke="#16a34a" stroke-width="0.8"/>
  <rect x="200" y="100" width="18" height="50" fill="none" stroke="#16a34a" stroke-width="0.8"/>
  <!-- f(x) top curve -->
  <path d="M 70 100 Q 110 55 160 68 Q 200 78 225 105" fill="none" stroke="#2563eb" stroke-width="2.2"/>
  <!-- g(x) bottom curve -->
  <path d="M 70 155 Q 130 148 175 150 Q 200 152 225 155" fill="none" stroke="#e05c2a" stroke-width="2.2" stroke-dasharray="6,3"/>
  <!-- dx arrow -->
  <line x1="120" y1="175" x2="138" y2="175" stroke="#555" stroke-width="1.2" marker-end="url(#arr)"/>
  <!-- Labels -->
  <text x="300" y="169" font-size="12" fill="#555">x</text>
  <text x="65" y="10"  font-size="12" fill="#555">y</text>
  <text x="105" y="50" font-size="12" fill="#2563eb" font-style="italic">f(x)</text>
  <text x="195" y="148" font-size="12" fill="#e05c2a" font-style="italic">g(x)</text>
  <text x="123" y="186" font-size="11" fill="#555">dx</text>
  <!-- height label -->
  <line x1="222" y1="100" x2="222" y2="155" stroke="#16a34a" stroke-width="1.2"/>
  <text x="228" y="132" font-size="11" fill="#16a34a">h</text>
</svg>`
        },
        {
          term: "Horizontal strips",
          phonetic: "/ˌhɒr.ɪˈzɒn.təl strɪps/",
          vietnamese: "Dải ngang (phương pháp chia ngang)",
          definition: "A method of computing area between curves by integrating with respect to y. Each thin horizontal rectangle has height dy and width |f(y) − g(y)|. Useful when curves are better expressed as functions of y.",
          example: "Area = ∫_c^d [f(y) − g(y)] dy, where f(y) is the right curve and g(y) is the left curve.",
          related: ["Area between two curves", "Vertical strips", "Definite integral"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#fff8f8" rx="8"/>
  <!-- Axes -->
  <line x1="60" y1="165" x2="290" y2="165" stroke="#555" stroke-width="1.5"/>
  <line x1="60" y1="15"  x2="60" y2="175" stroke="#555" stroke-width="1.5"/>
  <polygon points="290,161 298,165 290,169" fill="#555"/>
  <polygon points="56,15 60,7 64,15" fill="#555"/>
  <!-- Horizontal strips (shaded) -->
  <rect x="90"  y="40"  width="52" height="14" fill="#f472b6" opacity="0.35"/>
  <rect x="80"  y="56"  width="68" height="14" fill="#f472b6" opacity="0.35"/>
  <rect x="72"  y="72"  width="80" height="14" fill="#f472b6" opacity="0.35"/>
  <rect x="68"  y="88"  width="88" height="14" fill="#f472b6" opacity="0.35"/>
  <rect x="66"  y="104" width="90" height="14" fill="#f472b6" opacity="0.35"/>
  <rect x="68"  y="120" width="86" height="14" fill="#f472b6" opacity="0.35"/>
  <rect x="75"  y="136" width="72" height="14" fill="#f472b6" opacity="0.35"/>
  <!-- Strip borders -->
  <rect x="90"  y="40"  width="52" height="14" fill="none" stroke="#db2777" stroke-width="0.8"/>
  <rect x="80"  y="56"  width="68" height="14" fill="none" stroke="#db2777" stroke-width="0.8"/>
  <rect x="72"  y="72"  width="80" height="14" fill="none" stroke="#db2777" stroke-width="0.8"/>
  <rect x="68"  y="88"  width="88" height="14" fill="none" stroke="#db2777" stroke-width="0.8"/>
  <rect x="66"  y="104" width="90" height="14" fill="none" stroke="#db2777" stroke-width="0.8"/>
  <rect x="68"  y="120" width="86" height="14" fill="none" stroke="#db2777" stroke-width="0.8"/>
  <rect x="75"  y="136" width="72" height="14" fill="none" stroke="#db2777" stroke-width="0.8"/>
  <!-- Right curve x = f(y) -->
  <path d="M 142 40 Q 170 80 158 104 Q 150 125 147 150" fill="none" stroke="#2563eb" stroke-width="2.2"/>
  <!-- Left curve x = g(y) -->
  <path d="M 90 40 Q 70 80 66 110 Q 66 130 75 150" fill="none" stroke="#e05c2a" stroke-width="2.2" stroke-dasharray="6,3"/>
  <!-- dy arrow -->
  <line x1="50" y1="88" x2="50" y2="102" stroke="#555" stroke-width="1.2"/>
  <text x="36" y="97" font-size="11" fill="#555">dy</text>
  <!-- Labels -->
  <text x="300" y="169" font-size="12" fill="#555">x</text>
  <text x="65" y="10"  font-size="12" fill="#555">y</text>
  <text x="155" y="60" font-size="12" fill="#2563eb" font-style="italic">f(y)</text>
  <text x="60"  y="35" font-size="12" fill="#e05c2a" font-style="italic">g(y)</text>
  <!-- width label -->
  <line x1="68" y1="115" x2="156" y2="115" stroke="#db2777" stroke-width="1"/>
  <text x="95" y="112" font-size="11" fill="#db2777">width</text>
</svg>`
        },
        {
          term: "Volume",
          phonetic: "/ˈvɒl.juːm/",
          vietnamese: "Thể tích",
          definition: "The amount of three-dimensional space enclosed by a solid. In calculus, volumes are computed by integrating cross-sectional areas.",
          example: "The volume of a sphere of radius r is V = (4/3)πr³, derived by integration.",
          related: ["Cross-sectional area", "Solid of revolution", "Disk method"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#f0f4ff" rx="8"/>
  <!-- Solid: stacked disks perspective -->
  <!-- Back ellipse (shadow) -->
  <ellipse cx="160" cy="58" rx="72" ry="18" fill="#c7d7f9" stroke="#6b8de3" stroke-width="1.2"/>
  <!-- Cylinder body -->
  <rect x="88" y="58" width="144" height="90" fill="#a5b8f8" opacity="0.5"/>
  <!-- Side shading -->
  <path d="M 88 58 L 88 148 Q 88 166 160 166 Q 232 166 232 148 L 232 58" fill="#b8cbfa" opacity="0.4"/>
  <!-- Front bottom ellipse -->
  <ellipse cx="160" cy="148" rx="72" ry="18" fill="#7c9ef5" stroke="#3b5de3" stroke-width="1.5"/>
  <!-- Front ellipse top (visible arc) -->
  <path d="M 88 58 Q 124 76 160 76 Q 196 76 232 58" fill="none" stroke="#3b5de3" stroke-width="1.5"/>
  <!-- Axis line -->
  <line x1="160" y1="20" x2="160" y2="180" stroke="#e05c2a" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Radius arrow -->
  <line x1="160" y1="148" x2="232" y2="148" stroke="#1d4ed8" stroke-width="1.5"/>
  <polygon points="232,144 240,148 232,152" fill="#1d4ed8"/>
  <!-- Height arrow -->
  <line x1="248" y1="58" x2="248" y2="148" stroke="#16a34a" stroke-width="1.5"/>
  <polygon points="244,58 248,50 252,58" fill="#16a34a"/>
  <polygon points="244,148 248,156 252,148" fill="#16a34a"/>
  <!-- Labels -->
  <text x="190" y="143" font-size="14" fill="#1d4ed8" font-style="italic">R</text>
  <text x="254" y="107" font-size="14" fill="#16a34a" font-style="italic">h</text>
  <text x="168" y="17" font-size="12" fill="#e05c2a">axis</text>
  <text x="95"  y="190" font-size="13" fill="#1e3a8a" font-weight="bold">V = ∫A(x) dx</text>
</svg>`
        },
        {
          term: "Cross-sectional area",
          phonetic: "/krɒs ˈsek.ʃən.əl ˈeə.ri.ə/",
          vietnamese: "Diện tích mặt cắt ngang",
          definition: "The area of a slice of a solid perpendicular to a given axis. The volume of a solid with known cross-sectional area A(x) is V = ∫ₐᵇ A(x) dx.",
          example: "A solid has square cross-sections with side length s(x) = √(1 − x²). Then A(x) = 1 − x² and V = ∫₋₁¹ (1 − x²) dx.",
          related: ["Volume", "Disk method", "Washer method"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#f9fafb" rx="8"/>
  <!-- Solid outline (tapered shape) -->
  <path d="M 50 160 Q 100 140 160 130 Q 220 120 270 130 L 270 70 Q 220 60 160 65 Q 100 70 50 90 Z" fill="#cbd5e1" opacity="0.5" stroke="#64748b" stroke-width="1.5"/>
  <!-- x axis -->
  <line x1="40" y1="170" x2="290" y2="170" stroke="#555" stroke-width="1.5"/>
  <polygon points="290,166 298,170 290,174" fill="#555"/>
  <!-- Cross section slice highlighted -->
  <line x1="170" y1="63" x2="170" y2="135" stroke="#e05c2a" stroke-width="2" stroke-dasharray="4,2"/>
  <!-- Cross section square -->
  <rect x="155" y="63" width="30" height="30" fill="#fb923c" opacity="0.45" stroke="#ea580c" stroke-width="1.8"/>
  <!-- A(x) label on square -->
  <text x="162" y="82" font-size="11" fill="#c2410c" font-weight="bold">A(x)</text>
  <!-- dx brace -->
  <rect x="167" y="138" width="16" height="8" fill="none" stroke="#555" stroke-width="1"/>
  <text x="167" y="155" font-size="11" fill="#555">dx</text>
  <!-- x label -->
  <text x="162" y="185" font-size="12" fill="#555">x</text>
  <!-- a, b ticks -->
  <line x1="80"  y1="165" x2="80"  y2="175" stroke="#555" stroke-width="1.5"/>
  <line x1="250" y1="165" x2="250" y2="175" stroke="#555" stroke-width="1.5"/>
  <text x="77"  y="185" font-size="12" fill="#555">a</text>
  <text x="247" y="185" font-size="12" fill="#555">b</text>
  <!-- Formula -->
  <text x="55" y="25" font-size="13" fill="#1e3a8a" font-weight="bold">V = ∫ₐᵇ A(x) dx</text>
  <!-- Arrows along solid -->
  <text x="295" y="174" font-size="12" fill="#555">x</text>
</svg>`
        },
        {
          term: "Solid of revolution",
          phonetic: "/ˈsɒl.ɪd əv ˌrev.əˈluː.ʃən/",
          vietnamese: "Khối tròn xoay",
          definition: "A three-dimensional solid formed by rotating a two-dimensional region around an axis (usually the x-axis or y-axis).",
          example: "Rotating the region under y = √x from x = 0 to x = 4 around the x-axis produces a paraboloid.",
          related: ["Disk method", "Washer method", "Shell method"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#f0fff4" rx="8"/>
  <!-- Rotation arrow arc -->
  <path d="M 155 35 A 30 10 0 0 1 205 35" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="205,31 213,35 205,39" fill="#16a34a"/>
  <!-- x-axis (rotation axis) -->
  <line x1="40" y1="110" x2="290" y2="110" stroke="#e05c2a" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="292" y="114" font-size="12" fill="#e05c2a">x</text>
  <!-- 2D region (parabola under √x) shaded -->
  <path d="M 70 110 Q 120 65 180 50 Q 230 38 260 36 L 260 110 Z" fill="#86efac" opacity="0.45" stroke="#16a34a" stroke-width="1.5"/>
  <!-- Solid of revolution: top surface -->
  <path d="M 70 110 Q 120 65 180 50 Q 230 38 260 36" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <!-- Bottom mirror -->
  <path d="M 70 110 Q 120 155 180 170 Q 230 182 260 184" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="5,3" opacity="0.5"/>
  <!-- Right ellipse -->
  <ellipse cx="260" cy="110" rx="14" ry="74" fill="#93c5fd" opacity="0.35" stroke="#1d4ed8" stroke-width="1.5"/>
  <!-- Left point -->
  <circle cx="70" cy="110" r="3" fill="#e05c2a"/>
  <!-- Rotation label -->
  <text x="155" y="28" font-size="11" fill="#16a34a">rotate</text>
  <!-- Labels -->
  <text x="130" y="80" font-size="12" fill="#15803d" font-style="italic">y = f(x)</text>
  <text x="75" y="103" font-size="11" fill="#555">a</text>
  <text x="255" y="103" font-size="11" fill="#555">b</text>
</svg>`
        },
        {
          term: "Disk method",
          phonetic: "/dɪsk ˈmeθ.əd/",
          vietnamese: "Phương pháp đĩa tròn",
          definition: "A method for finding the volume of a solid of revolution by integrating the area of circular cross-sections (disks). V = π ∫ₐᵇ [R(x)]² dx, where R(x) is the radius of each disk.",
          example: "Rotating y = x² around the x-axis from 0 to 1: V = π ∫₀¹ (x²)² dx = π ∫₀¹ x⁴ dx = π/5.",
          related: ["Solid of revolution", "Washer method", "Cross-sectional area"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#f0f4ff" rx="8"/>
  <!-- x-axis -->
  <line x1="35" y1="105" x2="285" y2="105" stroke="#e05c2a" stroke-width="1.8" stroke-dasharray="6,3"/>
  <text x="287" y="109" font-size="12" fill="#e05c2a">x</text>
  <!-- Solid surface top curve -->
  <path d="M 65 105 Q 120 72 185 58 Q 230 50 260 48" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <!-- Solid surface bottom (mirror) -->
  <path d="M 65 105 Q 120 138 185 152 Q 230 160 260 162" fill="none" stroke="#1d4ed8" stroke-width="2" opacity="0.4" stroke-dasharray="5,3"/>
  <!-- Filled disks (stacked) -->
  <ellipse cx="130" cy="105" rx="10" ry="33" fill="#93c5fd" opacity="0.5" stroke="#2563eb" stroke-width="1.2"/>
  <ellipse cx="160" cy="105" rx="10" ry="47" fill="#93c5fd" opacity="0.5" stroke="#2563eb" stroke-width="1.2"/>
  <ellipse cx="190" cy="105" rx="10" ry="55" fill="#93c5fd" opacity="0.5" stroke="#2563eb" stroke-width="1.2"/>
  <!-- Highlighted single disk -->
  <ellipse cx="220" cy="105" rx="10" ry="58" fill="#3b82f6" opacity="0.55" stroke="#1d4ed8" stroke-width="2"/>
  <!-- Radius label -->
  <line x1="220" y1="105" x2="220" y2="47" stroke="#e05c2a" stroke-width="1.5"/>
  <text x="224" y="78" font-size="12" fill="#e05c2a" font-style="italic">R(x)</text>
  <!-- dx bracket -->
  <rect x="215" y="168" width="20" height="7" fill="none" stroke="#555" stroke-width="1"/>
  <text x="216" y="184" font-size="11" fill="#555">dx</text>
  <!-- Formula -->
  <text x="42" y="25" font-size="13" fill="#1e3a8a" font-weight="bold">V = π ∫ [R(x)]² dx</text>
</svg>`
        },
        {
          term: "Washer method",
          phonetic: "/ˈwɒʃ.ər ˈmeθ.əd/",
          vietnamese: "Phương pháp vành khăn",
          definition: "A method for finding the volume of a solid of revolution with a hole in the middle. V = π ∫ₐᵇ ([R(x)]² − [r(x)]²) dx, where R(x) is the outer radius and r(x) is the inner radius.",
          example: "Rotating the region between y = x and y = x² around the x-axis: V = π ∫₀¹ (x² − x⁴) dx.",
          related: ["Disk method", "Solid of revolution", "Shell method"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#fff8f8" rx="8"/>
  <!-- Washer front view (large circle with hole) -->
  <!-- Outer circle -->
  <circle cx="115" cy="100" r="68" fill="#fca5a5" opacity="0.45" stroke="#dc2626" stroke-width="2"/>
  <!-- Inner hole -->
  <circle cx="115" cy="100" r="32" fill="#fff8f8" stroke="#dc2626" stroke-width="2"/>
  <!-- Outer radius R -->
  <line x1="115" y1="100" x2="115" y2="32" stroke="#1d4ed8" stroke-width="1.8"/>
  <text x="120" y="62" font-size="13" fill="#1d4ed8" font-style="italic">R</text>
  <!-- Inner radius r -->
  <line x1="115" y1="100" x2="147" y2="100" stroke="#16a34a" stroke-width="1.8"/>
  <text x="127" y="96" font-size="13" fill="#16a34a" font-style="italic">r</text>
  <!-- Center dot -->
  <circle cx="115" cy="100" r="3" fill="#555"/>
  <!-- 3D side view -->
  <!-- x-axis -->
  <line x1="195" y1="100" x2="310" y2="100" stroke="#e05c2a" stroke-width="1.8" stroke-dasharray="5,3"/>
  <!-- Outer surface top -->
  <path d="M 205 100 Q 230 55 260 45 Q 285 38 305 38" fill="none" stroke="#dc2626" stroke-width="2"/>
  <!-- Outer surface bottom -->
  <path d="M 205 100 Q 230 145 260 155 Q 285 162 305 162" fill="none" stroke="#dc2626" stroke-width="2" opacity="0.4" stroke-dasharray="4,3"/>
  <!-- Inner surface top -->
  <path d="M 205 100 Q 230 80 260 75 Q 285 72 305 72" fill="none" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4,2"/>
  <!-- Washer slice highlighted -->
  <ellipse cx="280" cy="100" rx="9" ry="60" fill="#fca5a5" opacity="0.4" stroke="#dc2626" stroke-width="1.5"/>
  <ellipse cx="280" cy="100" rx="9" ry="26" fill="#fff8f8" stroke="#dc2626" stroke-width="1.5"/>
  <!-- R and r labels on side -->
  <line x1="280" y1="100" x2="280" y2="40"  stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="280" y1="100" x2="280" y2="74"  stroke="#16a34a" stroke-width="1.2"/>
  <text x="284" y="67"  font-size="11" fill="#1d4ed8" font-style="italic">R</text>
  <text x="284" y="89"  font-size="11" fill="#16a34a" font-style="italic">r</text>
  <!-- Formula -->
  <text x="30" y="188" font-size="12" fill="#1e3a8a" font-weight="bold">V = π∫(R²− r²)dx</text>
</svg>`
        },
        {
          term: "Shell method",
          phonetic: "/ʃel ˈmeθ.əd/",
          vietnamese: "Phương pháp vỏ trụ",
          definition: "A method for finding the volume of a solid of revolution using cylindrical shells. V = 2π ∫ₐᵇ x · f(x) dx when rotating around the y-axis. Each shell has radius x, height f(x), and thickness dx.",
          example: "Rotating y = x² around the y-axis from x = 0 to x = 1: V = 2π ∫₀¹ x · x² dx = 2π ∫₀¹ x³ dx = π/2.",
          related: ["Washer method", "Disk method", "Solid of revolution"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#f0fff4" rx="8"/>
  <!-- y-axis (rotation axis) -->
  <line x1="80" y1="15" x2="80" y2="175" stroke="#e05c2a" stroke-width="1.8" stroke-dasharray="6,3"/>
  <text x="85" y="14" font-size="12" fill="#e05c2a">y</text>
  <!-- x-axis -->
  <line x1="70" y1="160" x2="285" y2="160" stroke="#555" stroke-width="1.5"/>
  <polygon points="285,156 293,160 285,164" fill="#555"/>
  <!-- Outer shell (large) -->
  <ellipse cx="80" cy="160" rx="150" ry="14" fill="none" stroke="#16a34a" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.5"/>
  <rect x="80" y="55" width="150" height="105" fill="#bbf7d0" opacity="0.25" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Highlighted shell -->
  <ellipse cx="80" cy="160" rx="105" ry="10" fill="none" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="80" y="72" width="105" height="88" fill="none" stroke="#1d4ed8" stroke-width="0.8" stroke-dasharray="3,2"/>
  <!-- Shell top surface ellipse -->
  <ellipse cx="80" cy="72" rx="105" ry="10" fill="#93c5fd" opacity="0.45" stroke="#1d4ed8" stroke-width="1.8"/>
  <!-- Shell side -->
  <line x1="80" y1="72" x2="80" y2="160" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="185" y1="72" x2="185" y2="160" stroke="#1d4ed8" stroke-width="2"/>
  <!-- dx highlight -->
  <rect x="185" y="95" width="14" height="65" fill="#fbbf24" opacity="0.5" stroke="#d97706" stroke-width="1.5"/>
  <!-- Radius x -->
  <line x1="80" y1="152" x2="185" y2="152" stroke="#dc2626" stroke-width="1.5"/>
  <text x="125" y="148" font-size="12" fill="#dc2626" font-style="italic">x</text>
  <!-- Height f(x) -->
  <line x1="195" y1="72" x2="195" y2="160" stroke="#16a34a" stroke-width="1.5"/>
  <text x="200" y="118" font-size="12" fill="#16a34a" font-style="italic">f(x)</text>
  <!-- dx label -->
  <text x="186" y="87" font-size="11" fill="#d97706">dx</text>
  <!-- Formula -->
  <text x="42" y="195" font-size="12" fill="#1e3a8a" font-weight="bold">V = 2π ∫ x·f(x) dx</text>
</svg>`
        },
        {
          term: "Cylindrical shell",
          phonetic: "/sɪˈlɪn.drɪ.kəl ʃel/",
          vietnamese: "Vỏ hình trụ",
          definition: "A thin hollow cylinder used in the shell method. When 'unwrapped' and flattened, it forms a thin rectangular slab with height f(x), width 2πx (circumference), and thickness dx.",
          example: "A cylindrical shell at radius x with height f(x) has volume ΔV ≈ 2πx · f(x) · dx.",
          related: ["Shell method", "Solid of revolution", "Volume"],
          image: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" font-family="serif">
  <rect width="320" height="200" fill="#fefce8" rx="8"/>
  <!-- Cylindrical shell left side -->
  <!-- Outer cylinder -->
  <ellipse cx="95" cy="55" rx="50" ry="12" fill="#fde68a" stroke="#ca8a04" stroke-width="1.5"/>
  <rect x="45" y="55" width="100" height="95" fill="#fef08a" opacity="0.5"/>
  <ellipse cx="95" cy="150" rx="50" ry="12" fill="#fde68a" stroke="#ca8a04" stroke-width="1.5"/>
  <line x1="45" y1="55" x2="45" y2="150" stroke="#ca8a04" stroke-width="1.5"/>
  <line x1="145" y1="55" x2="145" y2="150" stroke="#ca8a04" stroke-width="1.5"/>
  <!-- Inner cylinder hole -->
  <ellipse cx="95" cy="55" rx="33" ry="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.2"/>
  <ellipse cx="95" cy="150" rx="33" ry="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.2" opacity="0.7"/>
  <line x1="62" y1="55" x2="62" y2="150" stroke="#ca8a04" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="128" y1="55" x2="128" y2="150" stroke="#ca8a04" stroke-width="1.2" stroke-dasharray="3,2"/>
  <!-- Labels left -->
  <line x1="95" y1="150" x2="145" y2="150" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="112" y="168" font-size="12" fill="#1d4ed8" font-style="italic">x</text>
  <line x1="152" y1="55" x2="152" y2="150" stroke="#16a34a" stroke-width="1.5"/>
  <text x="156" y="107" font-size="12" fill="#16a34a" font-style="italic">f(x)</text>
  <!-- Arrow: unwrap -->
  <text x="163" y="105" font-size="20" fill="#555">→</text>
  <!-- Unwrapped rectangle -->
  <rect x="188" y="55" width="108" height="95" fill="#fde68a" opacity="0.6" stroke="#ca8a04" stroke-width="1.8"/>
  <!-- Width label: 2πx -->
  <line x1="188" y1="170" x2="296" y2="170" stroke="#1d4ed8" stroke-width="1.5"/>
  <polygon points="188,166 180,170 188,174" fill="#1d4ed8"/>
  <polygon points="296,166 304,170 296,174" fill="#1d4ed8"/>
  <text x="220" y="185" font-size="12" fill="#1d4ed8">2πx</text>
  <!-- Height label -->
  <line x1="305" y1="55" x2="305" y2="150" stroke="#16a34a" stroke-width="1.5"/>
  <text x="308" y="107" font-size="12" fill="#16a34a" font-style="italic">f(x)</text>
  <!-- dx label -->
  <text x="225" y="48" font-size="11" fill="#d97706">thickness = dx</text>
</svg>`
        },
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
