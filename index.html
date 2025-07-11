# adinsights360/app.py
import streamlit as st
import pandas as pd
import sqlite3
import altair as alt
from datetime import datetime

# Connect to SQLite DB (or create it)
conn = sqlite3.connect('data/ads_data.db')
cursor = conn.cursor()

# Create table and insert mock data if not exists
cursor.execute('''CREATE TABLE IF NOT EXISTS ads_performance (
    date TEXT,
    campaign TEXT,
    region TEXT,
    ad_type TEXT,
    impressions INTEGER,
    clicks INTEGER,
    spend REAL
)''')

# Load data (skip if already populated)
cursor.execute("SELECT COUNT(*) FROM ads_performance")
if cursor.fetchone()[0] == 0:
    df_mock = pd.read_csv('data/mock_ads_data.csv')
    df_mock.to_sql('ads_performance', conn, if_exists='append', index=False)

# Sidebar filters
st.sidebar.header("Filters")
region = st.sidebar.multiselect("Select Region", ["US", "EU", "APAC"])
ad_type = st.sidebar.multiselect("Select Ad Type", ["Video", "Banner", "Interactive"])
date_range = st.sidebar.date_input("Date Range", [datetime(2025, 1, 1), datetime(2025, 7, 1)])

# Construct query dynamically
query = "SELECT * FROM ads_performance WHERE 1=1"
if region:
    query += f" AND region IN ({','.join(['?']*len(region))})"
if ad_type:
    query += f" AND ad_type IN ({','.join(['?']*len(ad_type))})"
query += " AND date BETWEEN ? AND ?"

params = region + ad_type + [str(date_range[0]), str(date_range[1])]
df = pd.read_sql_query(query, conn, params=params)

# Calculate metrics
df['CTR'] = (df['clicks'] / df['impressions']).fillna(0)
df['CPC'] = (df['spend'] / df['clicks']).fillna(0)

st.title("📊 AdInsights360 Dashboard")
st.markdown("""Explore ad performance with filters by region, ad type, and date.")

# Show KPI Metrics
col1, col2, col3 = st.columns(3)
col1.metric("Total Impressions", f"{df['impressions'].sum():,}")
col2.metric("Total Clicks", f"{df['clicks'].sum():,}")
col3.metric("Average CTR", f"{df['CTR'].mean():.2%}")

# CTR over time
chart_ctr = alt.Chart(df).mark_line().encode(
    x='date:T',
    y=alt.Y('CTR:Q', title='Click-Through Rate'),
    color='campaign:N'
).properties(title="CTR Over Time")

st.altair_chart(chart_ctr, use_container_width=True)

# Spend breakdown
chart_spend = alt.Chart(df).mark_bar().encode(
    x='campaign:N',
    y='spend:Q',
    color='region:N'
).properties(title="Spend Breakdown by Campaign")

st.altair_chart(chart_spend, use_container_width=True)

st.dataframe(df)

conn.close()
