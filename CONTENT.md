## 360 World --- Website Content & Layout Blueprint
==============================================

01\. HERO --- THE CORE IDEA
-------------------------

360 World proposes a new infrastructure model: compute as a utility. Instead of keeping data and computing resources tightly coupled, 360 World separates them. Every device can become a source of compute; public cloud becomes the backup.

02\. THE INFRASTRUCTURE PROBLEM
-------------------------------

Modern AI, analytics, and software workloads require increasing amounts of computing power. Companies often maintain expensive cloud infrastructure 24/7 because they need enough capacity to handle occasional periods of peak demand. This creates a fundamental assumption: data and compute have to live together. 360 World challenges that assumption.

03\. THE PARADIGM SHIFT
-----------------------

360 World treats computing power more like electricity. Electricity is generated across a distributed grid and routed to wherever it is needed. Similarly, computing capacity can be distributed across many devices and dynamically routed to workloads. The goal is to route compute when it is needed rather than permanently provision compute capacity.

04\. DECOUPLE DATA FROM COMPUTE
-------------------------------

The Data Plane and Compute Plane are separate. Customer data can remain on-premises or in customer-controlled cloud storage. Computing can happen elsewhere on available devices without requiring the master data to move with it. Data stays where the customer controls it. Compute moves to where capacity exists.

05\. WHAT THE PLATFORM RUNS
---------------------------

360 World supports workloads such as API services, web applications, mobile applications, AI inference, analytics, and AI agents. Each workload requires two fundamental resources: Data + Compute. The architecture separates these so they can be managed independently.

06\. THE DATA PLANE
-------------------

The Data Plane is the customer's controlled storage environment. Data can remain in an on-premises data center or in object storage such as S3, GCS, or R2. Air-gapped or isolated deployments are also supported. The customer controls where master data lives.

07\. THE COMPUTE PLANE --- THE EDGE FLEET
---------------------------------------

The Compute Plane is a distributed fleet of available devices. Potential nodes include phones, laptops, smart TVs, IoT devices, and other edge hardware. These devices contribute compute when they have available resources, turning globally distributed idle hardware into a shared compute layer.

08\. THE CONTROL PLANE
----------------------

A distributed compute network requires centralized orchestration. The Control Plane manages scheduling, routing, policies, telemetry, billing, and secrets. It determines where workloads run and monitors system health and performance.

09\. PUBLIC CLOUD AS BACKUP
---------------------------

Public cloud remains part of the architecture. AWS, GCP, Azure, Cloudflare, Fly.io, Oracle, and others serve as failover, burst, and durability infrastructure. The model targets ~98% of workloads on distributed edge compute and ≤2% on public cloud.

10\. SECURITY
-------------

The central question is: "Are we putting customer data on random people's phones?" The answer is no. Customer master data remains inside the designated enterprise perimeter, either on-premises or in secure customer-controlled cloud storage.

11\. TRANSIENT EDGE COMPUTE
---------------------------

Edge devices receive only fragmented, transient micro-tasks rather than full datasets. Processing occurs in memory without creating persistent copies of customer data. After execution, temporary data is wiped. Zero master data is stored at the edge.

12\. THE ECONOMIC MODEL
-----------------------

The model replaces expensive, continuously provisioned cloud capacity with distributed idle compute. The target is: ~98% distributed edge compute, ≤2% public cloud failover and burst, and 0% master data stored at the edge. This significantly reduces infrastructure costs and eliminates much of the traditional "Cloud Tax."

13\. THE OLD WAY OF SCALING
---------------------------

Traditional infrastructure requires forecasting demand and provisioning capacity in advance. Scaling involves manual provisioning, additional servers, cloud negotiations, and rising infrastructure costs. Systems scale according to budget constraints.

14\. THE 360 WORLD WAY OF SCALING
---------------------------------

Compute capacity expands as the device ecosystem expands. More participating devices → more available compute → greater workload capacity. Infrastructure scales with the ecosystem rather than requiring continuous centralized investment.

15\. TRUE HYBRID INFRASTRUCTURE
-------------------------------

The architecture combines three environments:\
Data: On-premises or customer-controlled cloud.\
Primary Compute: Distributed edge devices.\
Backup Compute: Public cloud.\
This allows customers to retain existing data infrastructure while changing how compute is sourced.

16\. THE INFRASTRUCTURE FLOW
----------------------------

Workloads require data and compute. Data remains in the customer's controlled environment. The Control Plane determines where computation occurs. The Edge Fleet performs most computation. Public cloud provides failover and burst capacity when needed.

17\. THE CORE PROPOSITION
-------------------------

360 World separates where data lives from where computation happens. Customer data remains under customer control. Compute becomes a dynamically routed resource sourced from distributed hardware. Public cloud becomes a safety net rather than the default compute layer.

18\. CLOSING MESSAGE
--------------------

Security: Data remains within the designated enterprise perimeter.\
Economics: ~98% distributed edge compute.\
Scale: Compute capacity grows with the device ecosystem.\
Vision:  Compute, delivered like a utility.