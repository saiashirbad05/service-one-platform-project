# Service-One

**Know the fair price before you pay.**

Service-One is a web platform for checking whether a home appliance repair or installation quote is fair — before the customer pays. Enter your location, appliance, service type, and quoted price. Service-One compares it against local market data, nearby provider data, historical community reports, and trust signals, then returns a clear verdict.

---

## Live Demo

**[service-one-platform.web.app](https://service-one-platform.web.app)**

---

## What It Does

- Checks if an appliance service quote is **Fair**, **High**, **Suspicious**, or **Low**
- Shows the **local fair price range** for your city or area
- Lists **nearby providers** ranked by reliability and price fairness
- Flags **trust signals and red flags** in the quote
- Lets users **submit community reports** with real bill data
- Supports **English and Hindi**
- Google OAuth login to save and download quote history

---

## Supported Appliances

| Appliance | Common Services |
|---|---|
| AC | Installation, gas refill, cooling issue, maintenance |
| Fridge | Not starting, cooling issue, leakage, general repair |
| Washing Machine | Not starting, leakage, maintenance |
| TV | General repair, inspection |
| RO | Filter replacement, maintenance, installation |
| Geyser | Installation, repair, inspection |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript |
| Backend | FastAPI (Python) |
| AI / Agents | Google ADK, Vertex AI (Gemini Flash, Gemini Flash-Lite) |
| Auth | Google OAuth 2.0 |
| Database | PostgreSQL / Supabase |
| File Storage | Google Cloud Storage |
| Deployment | Cloud Run (backend), Firebase Hosting (frontend) |
| Cache | Redis |
| Secrets | Google Secret Manager |

---

## Project Structure

```
service-one/
├── frontend/               # React app
│   ├── src/
│   │   ├── components/     # Header, Hero, Cards, Footer, etc.
│   │   ├── pages/          # Landing, QuoteCheck, Result, Dashboard, Admin
│   │   └── i18n/           # English and Hindi strings
│   ├── public/
│   └── package.json
│
├── backend/                # FastAPI service
│   ├── app/
│   │   ├── api/            # Route handlers (quote, providers, reports, admin)
│   │   ├── agents/         # ADK agent definitions
│   │   ├── models/         # Pydantic schemas and DB models
│   │   └── core/           # Auth, config, database connection
│   ├── requirements.txt
│   ├── .env.example
│   └── main.py
│
├── .gitignore
└── README.md
```

---

## Local Setup

### Prerequisites

- Node.js 18+
- Python 3.11+
- A Google Cloud project with Vertex AI enabled
- PostgreSQL database (or a Supabase project)

---

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/service-one.git
cd service-one
```

---

### 2. Backend setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv

# On Linux / macOS
source venv/bin/activate

# On Windows
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

Key variables to set in `.env`:

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DATABASE_URL=
GCS_BUCKET_NAME=
VERTEX_PROJECT_ID=
VERTEX_LOCATION=asia-south1
SECRET_KEY=
```

Run the backend locally:

```bash
uvicorn main:app --reload
```

Backend will be live at `http://localhost:8000`.

---

### 3. Frontend setup

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend will be live at `http://localhost:5173`.

---

## API Overview

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/quote-check` | Run a quote check |
| GET | `/api/providers` | Get nearby providers |
| POST | `/api/reports` | Submit a community report |
| POST | `/api/uploads` | Upload bill or quote image |
| GET | `/api/user/history` | Get user's saved quote history |
| GET | `/api/admin/dashboard` | Admin moderation and stats |

**Sample quote-check request body:**

```json
{
  "city": "Bhubaneswar",
  "area": "Patia",
  "appliance": "AC",
  "service_type": "gas_refill",
  "quoted_price": 2800,
  "user_language": "en"
}
```

**Sample response:**

```json
{
  "verdict": "high",
  "quoted_price": 2800,
  "fair_range_min": 1200,
  "fair_range_max": 1800,
  "explanation": "AC gas refill in Patia typically costs between ₹1,200 and ₹1,800. The quoted amount is above the fair range.",
  "confidence": "medium",
  "provider_suggestions": [...],
  "report_id": "qc_abc123"
}
```

---

## Agent Architecture

The backend uses a multi-agent system powered by Google ADK and Vertex AI:

| Agent | Model | Role |
|---|---|---|
| Locality Price Agent | Gemini Flash-Lite | Fetches local market pricing signals |
| Provider Comparison Agent | Gemini Flash-Lite | Identifies nearby providers and price ranges |
| Community Report Analyzer | Gemini Flash-Lite | Summarizes community-submitted quote data |
| Trust and Red Flag Detector | Gemini Flash-Lite | Flags suspicious quote patterns |
| Final Advisor Agent | Gemini Flash | Combines all signals into final verdict |

---

## Verdict Logic

| Verdict | Meaning |
|---|---|
| Fair | Quote matches local range closely |
| High | Quote is above the fair range |
| Suspicious | Quote is significantly inflated or contains red flags |
| Low | Quote is unusually low — possible quality or legitimacy concern |

---

## Development Phases

- **Phase 1** — Static landing page + mocked quote result
- **Phase 2** — FastAPI backend + working quote API + stored history
- **Phase 3** — ADK agent integration + Vertex AI pricing logic
- **Phase 4** — Community reports + uploads + moderation queue
- **Phase 5** — Admin dashboard + analytics + production hardening

---

## Contributing

Pull requests are welcome. Open an issue first for any significant change. Keep PRs scoped to one feature or fix.

---

## License

MIT
