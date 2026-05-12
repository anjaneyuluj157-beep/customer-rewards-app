function RewardsSummary({ monthlyRewards, totalRewards }) {
  return (
    <div>
      <h2>Rewards Summary</h2>

      {Object.entries(monthlyRewards).map(([month, points]) => (
        <p key={month}>
          {month}: {points} points
        </p>
      ))}

      <h3>Total Rewards: {totalRewards}</h3>
    </div>
  );
}

export default RewardsSummary;