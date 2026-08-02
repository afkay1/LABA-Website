"""Backend API tests for LA.BA restaurant."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://art-of-dining-sa.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health
def test_health(api_client):
    r = api_client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "LA.BA" in data["message"] or "Dining" in data["message"]


# Reservations create + list persistence
def test_create_reservation_and_persistence(api_client):
    payload = {
        "first_name": "TEST_Ahmed",
        "last_name": "Khan",
        "phone": "+966500000000",
        "guests": 2,
        "date": "2026-02-14",
        "time": "20:00",
        "special_requests": "TEST window seat"
    }
    r = api_client.post(f"{BASE_URL}/api/reservations", json=payload)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["first_name"] == "TEST_Ahmed"
    assert body["guests"] == 2
    assert body["status"] == "pending"
    assert "id" in body and len(body["id"]) > 0
    rid = body["id"]

    # verify persistence
    r2 = api_client.get(f"{BASE_URL}/api/reservations")
    assert r2.status_code == 200
    lst = r2.json()
    assert any(x["id"] == rid for x in lst)


def test_reservation_validation_missing_fields(api_client):
    r = api_client.post(f"{BASE_URL}/api/reservations", json={"first_name": "x"})
    assert r.status_code == 422


def test_reservation_guests_bounds(api_client):
    payload = {
        "first_name": "TEST_A", "last_name": "B", "phone": "+966",
        "guests": 100, "date": "2026-02-14", "time": "20:00"
    }
    r = api_client.post(f"{BASE_URL}/api/reservations", json=payload)
    assert r.status_code == 422
