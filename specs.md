**Processor & Wireless**
- **Main SoC:** Nordic Semiconductor nRF52840-QIAA-R
    - 32-bit Arm Cortex-M4 CPU with FPU, running at 64 MHz
    - 1 MB Flash, 256 KB RAM
    - Bluetooth 5.4, Bluetooth Mesh, Thread, Zigbee, Matter, 2.4 GHz proprietary support
    - NFC-A Tag support
    - USB, QSPI, high-speed SPI, PWM, PDM, I2S, ADC, comparator
    - -40°C to +85°C operating temperature
    - Supply voltage: 1.7 V to 5.5 V
    - 48 GPIOs
    - Package: aQFN73 (7x7 mm)[1]

**Biometric & Sensor Hub**
- **Analog Devices MAX32664GWEZ+** (Biometric Sensor Hub)
    - Embedded firmware and algorithms for wearable biometrics
    - Interfaces: Fast-mode slave I2C (host), master I2C/SPI (sensors)
    - Supports heart rate, SpO₂, and blood pressure estimation (depending on firmware version)
    - Motion artifact compensation with direct or host-connected accelerometer
    - Ultra-low power: operates from 1.8 V to 3.3 V
    - Package: 3 mm x 3 mm TQFN, -40°C to +105°C operating range[2]

- **Analog Devices MAX86174A** (Optical Data Acquisition)
    - Complete optical front-end for PPG/SpO₂
    - 2 optical receive channels, 4 LED driver outputs
    - 20-bit ADC, ambient light cancellation, low noise (<50 pA RMS)
    - Ultra-low power: <11 μA (typical, optical readout at 25 fps), <1 μA shutdown
    - Frame rates: 1–2048 fps, high dynamic range (up to 111 dB)
    - Package: 1.67 mm x 1.78 mm WLP, -40°C to +85°C[3]

**Motion Sensors**
- **Bosch BMI323** (Mainboard, 6-axis IMU)
    - 16-bit triaxial gyroscope
    - 16-bit triaxial accelerometer
    - Low power, integrated motion-triggered interrupts
    - Package: 2.5 x 3.0 x 0.83 mm, 14-pin LGA[4]

- **STMicroelectronics LIS2DS12TR** (HR Board, 3-axis accelerometer)
    - Ultra-low power, high-performance accelerometer
    - Used for motion compensation in heart rate applications
    - Package: LGA-12

**Memory**
- **Flash Storage:** 1 MB (on nRF52840)[1]

**Battery & Power**
- **Battery Capacity:** 90 mAh (rechargeable Li-ion or Li-polymer, typical for wearables)
- **Charging:** Magnetic charging interface

**Physical**
- **Enclosure Material:** ABS+PC (polycarbonate blend)
- **Weight:** 8.6 g
- **45 x 35 x 12mm()**