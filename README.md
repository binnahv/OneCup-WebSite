# OneCup Reservation & Queue System

A web application designed to manage both **table reservations** and a **waiting queue** for the OneCup cafeteria.

## Description

This project implements a complete system that allows users to:

- Make and manage table reservations.
- Join a queue when no tables are available.
- Check and confirm reservation or queue status.

## Features

- **Create Reservation**: Users can reserve a table by providing basic information.
- **Manage Reservation**: Log in to view, edit, confirm, or cancel reservations.
- **Queue System**: Users can enter a waiting queue if no reservations are available and get notified when it’s their turn.
- **Real-time Status**: View current reservation or queue position.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- HTML, CSS, JavaScript

## Getting Started

For installation and usage instructions, refer to the [Installation Guide](INSTALLATION.md).

---

## Business Rules

- **Reservation Priority**: Reservations are handled on a first-come, first-served basis. Users can book a table for a specific date and time, subject to availability.
- **Queue System**: If no tables are available, users can join a waiting queue. The queue operates in order of arrival.
- **Notifications**: Users are notified (via the application interface) when their reservation is confirmed or when their turn in the queue arrives.
- **Reservation Limits**: Each user can hold only one active reservation at a time.
- **Cancellation**: Users can cancel reservations or leave the queue at any time.
- **Editing Reservations**: Existing reservations can be edited before the scheduled time, as long as there is availability.
- **No-show Policy**: If a user does not confirm or show up within a grace period, the reservation may be released to the next in the queue.

These rules ensure fair and efficient management of table reservations and the waiting queue in the OneCup cafeteria.
